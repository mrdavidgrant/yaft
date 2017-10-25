class Api::V1::ActivitiesController < Api::V1::BaseController

  def index
    get_user
    activities = @user.sessions.where template: false
    render json: {sessions: activities}
  end

  def create
    get_user
    @activity = @user.sessions.new name: post_params[:name]
    if post_params[:liftsets].present?
      @update = post_params[:liftsets]
      @update.each do |liftset|
        set = @activity.liftsets.new
        set.update_attributes liftset
      end
    end
    if @user.save
      render json: {message: "success", activity: @activity}
    end
  end

  def show
    @activity = Session.find params[:id]
    render json: {activity: @activity, liftsets: @activity.liftsets}
  end

  def update
    @activity = Session.find params[:id]
    @activity[:completed_at] = DateTime.now
    if params[:liftsets].present?
      @update = post_params[:liftsets]
      puts post_params[:liftsets]
      @update.each do |liftset|
        set = @activity.liftsets.new
        set.update_attributes liftset
      end
    end
    if @activity.save
      render json: {message: "success", activity: @activity, liftsets: @activity.liftsets}
    else
      render json: {error: @activity.errors.full_messages}
    end
  end

  def destroy
    @activity = Session.find params[:id]
    @activity.destroy
    render json: {message: 'success'}
  end

  private

  def get_user

    @user = User.find params[:user_user_id]
  # if @user
  # else
  #   render json: @user.errors.full_messages
  end

  def post_params
    params.require(:session).permit(:name, :user_id, :liftsets => [:session_id, :equipment, :rest, :reps, :weight, :motion])
  end

end
