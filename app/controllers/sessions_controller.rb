class SessionsController < ApplicationController
  # skip_before_action :authenticate_request

  def new
    redirect_to "https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22CJ8J&redirect_uri=#{ENV['URL_PATH']}/auth/fitbit/callback&scope=activity%20heartrate%20profile%20weight&expires_in=604800"
  end

  def create
    new_token
    get_user
    ltoken = jwt_encode(user_id: @user.user_id)
    if @user.save
      render json: {auth_token: ltoken, user: @user}
    else
      render json: {errors: user.errors.full_messages}
    end
    create_subscription
  end


  private

  def new_token
    t = Curl::Easy.http_post("https://api.fitbit.com/oauth2/token",
    Curl::PostField.content('client_id','22CJ8J'),
    Curl::PostField.content('grant_type', 'authorization_code'),
    Curl::PostField.content('redirect_uri', "#{ENV['URL_PATH']}/auth/fitbit/callback"),
    Curl::PostField.content('code', params[:code])) do |curl|
      curl.headers["Authorization"] = "Basic MjJDSjhKOjJmMDRhYzFhNjkwZDdhMTQ3YzM0NGE5NWMyNDI0MWEw"
      curl.headers["Accept"] = "application/json"
    end
    ftoken = JSON.parse(t.body)
    @user = User.find_or_create_by(user_id: ftoken["user_id"])
    @user.token = Token.find_or_create_by(user_id: ftoken["user_id"])
    @user.token.update_attributes ftoken
  end

  def get_user
    u = Curl::Easy.perform("https://api.fitbit.com/1/user/-/profile.json") do |curl|
      curl.headers["Authorization"] = "Bearer #{@user.token[:access_token]}"
    end
    fuser = JSON.parse(u.body)["user"]
    @user.age = fuser["age"]
    @user.avatar = fuser["avatar"]
    @user.display_name = fuser["displayName"]
    @user.dob = fuser["dateOfBirth"]
    @user.first_name = fuser["firstName"]
    @user.last_name = fuser["lastName"]
    @user.gender = fuser["gender"]
    @user.height_cm = fuser["height"]
    @user.full_name = fuser["fullName"]
    @user.weight_kg = fuser["weight"]
    @user.save

  end

  def create_subscription
    s = Curl::Easy.http_post("https://api.fitbit.com/1/user/-/activities/apiSubscriptions/#{@user[:user_id]}.json") do |curl|
      curl.headers["Authorization"] = "Bearer #{@user.token[:access_token]}"
    end
  end

end
