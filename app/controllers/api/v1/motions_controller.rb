class Api::V1::MotionsController < Api::V1::BaseController
  def index
    motions = Motion.all
    render json: {motions: motions}
  end
end
