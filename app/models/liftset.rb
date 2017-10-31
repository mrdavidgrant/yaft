class Liftset < ApplicationRecord
  belongs_to :session
  belongs_to :equipment
  belongs_to :motion

  def as_json(*args)
    output = self.attributes.select { |k,v| !%w(created_at updated_at).include?(k) }
    output[:motion] = motion.name
    output[:image] = motion.image
    output[:equipment] = equipment.name if equipment
    output
  end
end
