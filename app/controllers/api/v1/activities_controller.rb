class Api::V1::ActivitiesController < Api:V1::BaseController

  def index
    get_user
    render json: @user.sessions
  end

  def create
    get_user
    @activity = user.session.new name: request.body.name
  end

  def show
    @activity = Session.find params[:id]
  end

  def update
    @activity = Session.find params[:id]
    @update = request.body.session
    @update.each do |liftset|
      set = @activity.liftset.create
      set.update_attributes liftset
      set.save
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
  end

end
