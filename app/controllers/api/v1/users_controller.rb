class Api::V1::UsersController < Api::V1::BaseController
  skip_before_action :authenticate_request, :only => [:authenticate, :create]

  def new
    user = User.new
  end

  def authenticate
    user = (params[:user])
    puts "#{user[:email]}, #{user[:password]}"
    command = AuthenticateUser.call(user[:email], user[:password])

    if command.success?
      current_user = User.where(email: user[:email]).select(:id, :first_name, :last_name, :email, :username)
      render json: { auth_token: command.result, user: current_user }
    else
      render json: { error: command.errors }, status: :unauthorized
    end
  end

  def create
    user = User.new(user_params)
    if user.save
      authenticate
    else
      render json: { error: user.errors.full_messages }
    end
  end

  def update
    user = User.find(params[:id])
    if user.update_attributes(user_params) && user[:id] == @user[:id]
      render json: { message: "update successfull", user: user }
    else
      render json: { errors: user.errors.full_messages }
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :username, :email, :password, :password_confirmation)
  end
end
