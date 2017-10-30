class Liftset < ApplicationRecord
  belongs_to :session
  belongs_to :equipment
  belongs_to :motion

  def as_json(*args)
    output = self.attributes.select { |k,v| !%w(equipment_id motion_id created_at updated_at session_id).include?(k) }
    output[:motion] = motion.name
    output[:equipment] = equipment.name if equipment
    output
  end
end
