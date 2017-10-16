class Api::V1::SessionsController < Api::V1::BaseController
  def index
    user = User.find_by params[:user_id]
    @sessions = User.sessions.all
    render json: { user: user, sessions: @sessions }
  end

  def create
    user = User.find params[:user_id]
    session = user.sessions.new(session_params)
    session.user_id = @user.id

    if session.save
      render json: { message: "successfully created session #{session[:id]}", session: session }
    else
      render json: { error: user.errors.full_messages }
    end
  end

  def destroy
    session = Session.find params[:id]
    session.destroy
    render json: { message: "#{session[:id]} successfully deleted"}
  end

  def show
    session = Session.find.params[:id]
    render json: { session: session }
  end

  def update
    session = Session.find params[:id]
    if session.update_attributes(session_params)
      render json: { message: "update successfull", session: session }
    else
      render json: { errors: session.errors.full_messages }
    end
  end

  private

  def session_params
    params.require(:session).permit(:name)
  end
end
