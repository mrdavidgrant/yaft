class Motion < ApplicationRecord
  belongs_to :body_part

  def as_json(*args)
    output = self.attributes.select { |k,v| !%w(created_at updated_at body_part_id).include?(k) }
    output[:body_part] = body_part.name
    output
  end
end
