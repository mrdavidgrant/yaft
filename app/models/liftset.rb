class Liftset < ApplicationRecord
  belongs_to :session
  has_a :motion
end
