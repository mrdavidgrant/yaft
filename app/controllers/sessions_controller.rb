class SessionsController < ApplicationController

  def new
    redirect_to "https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22CJ8J&redirect_uri=#{ENV['URL_PATH']}/auth/fitbit/callback&scope=activity%20heartrate%20profile%20weight&expires_in=604800"
  end

  def create
    get_token
    update_user
    if @user.save
      response.headers['Authorization'] = "Bearer #{@user.token[:access_token]}"
      render json: {message: "success", user: @user}
    else
      render json: {errors: token.errors.full_messages}
    end
  end


  private

  def get_token
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

  def update_user
    u = Curl::Easy.perform("https://api.fitbit.com/1/user/-/profile.json") do |curl|
      curl.headers["Authorization"] = "Bearer #{@user.token[:access_token]}"
    end
    fuser = JSON.parse(u.body)["user"]
    puts fuser
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

end
