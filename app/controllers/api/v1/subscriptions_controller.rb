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
      getactivity(update)
    end
  end

  private

  def getuser(update)
    @updateUser = User.find(update[:ownerId])
  end

  def getactivity(update)
    now = DateTime.now.strftime("%Y-%m-%dT%H:%M:%S")
    u = Curl::Easy.perform("https://api.fitbit.com/1/user/#{update[:ownerId]}/activities/list.json?beforeDate=#{now}&sort=desc&offset=0&limit=1") do |curl|
      curl.headers["Authorization"] = "Bearer #{@updateUser.token[:access_token]}"
    end
    @activities = JSON.parse(u.body)["activities"]
    # puts "activities #{@activities}"
    @activities.each do |activity|
      puts "Name: #{activity["activityName"]}"
      puts "Heart Rate: #{activity["heartRateLink"]}"
      puts "Calories: #{activity["caloriesLink"]}"
    end
  end

end
