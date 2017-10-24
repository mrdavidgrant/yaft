class Api::V1::SubscriptionsController < Api::V1::BaseController
  skip_before_action :authenticate_request

  def index
    puts params
    if params[:verify].present?
      verification = params[:verify]
      if verification == '4ffcd6af896282089765587454657fa7688dbf4edb43719bb5e268368bfd4c59'
        render body: nil, :status => 204
      else
        render body: nil, :status => 404
      end
    end
  end

  def create
    render body: nil, :status => 204
    @updates = params["_json"]
    @updates.each do |update|
      getuser(update)
      getHeartRate(update)
      getCalories(update)
    end
  end

  private

  def getuser(update)
    @updateUser = User.find(update[:ownerId])
  end

  def getHeartRate(update)
    @activities = @updateUser.sessions.where(:heartrate.empty?).order(completed_at: :desc)
    @activities.each do |activity|
      date = activity.created_at.strftime("%Y-%m-%d")
      start = activity.created_at.strftime("%H:%M:%S")
      finish = activity.completed_at.strftime("%H:%M:%S")
      hr = Curl::Easy.perform("https://api.fitbit.com/1/user/#{@updateUser[:user_id]}/activities/heart/date/#{date}/#{date}/1sec/time/#{start}/#{finish}.json") do |curl|
        curl.headers["Authorization"] = "Bearer #{@updateUser.token[:access_token]}"
      end
      puts JSON.parse(hr.body)
      data = JSON.parse(hr.body)["activities-heart-intraday"]["dataset"]
      puts data
      activity[:heartrate] = data
      if activity.save
        puts "saved successfully"
      else
        puts activity.errors.full_messages
      end
    end
  end

  # https://api.fitbit.com/1/user/-/activities/calories/date/today/today/1min/time/12%3A00%3A00/12%3A39%3A00.json

  def getCalories(update)
    @activities = @updateUser.sessions.where(:heartrate.empty?).order(completed_at: :desc)
    @activities.each do |activity|
      date = activity.created_at.strftime("%Y-%m-%d")
      start = activity.created_at.strftime("%H:%M:%S")
      finish = activity.completed_at.strftime("%H:%M:%S")
      cal = Curl::Easy.perform("https://api.fitbit.com/1/user/#{@updateUser[:user_id]}/activities/calories/date/#{date}/#{date}/1min/time/#{start}/#{finish}.json") do |curl|
        curl.headers["Authorization"] = "Bearer #{@updateUser.token[:access_token]}"
      end
      data = JSON.parse(cal.body)["activities-calories-intraday"]["dataset"]
      activity[:calories] = data
      if activity.save
        puts "saved successfully"
      else
        puts activity.errors.full_messages
      end
    end
  end
end
