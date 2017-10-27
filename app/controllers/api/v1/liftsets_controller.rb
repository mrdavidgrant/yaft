class Api::V1::LiftsetsController < ApplicationController
  def destroy
    @liftset = Liftset.find params[:id]
    @liftset.destroy
    render json: {message: 'success'}
  end
end
