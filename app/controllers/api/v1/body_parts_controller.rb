class Api::V1::BodyPartsController < Api::V1::BaseController
  def index
    puts params[:id]
    motions = BodyPart.find_by(id: params[:id]).motions
    render json: { motions: motions }
  end
end
