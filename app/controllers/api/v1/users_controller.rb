class Api::V1::UsersController < Api::V1::BaseController

  def new
    user = User.new
  end

  def show
    @user = User.find(params[:id])
    render json: {user: @user}

  end

  def create

  end

  def update

  end

  private

  def user_params

  end
end
