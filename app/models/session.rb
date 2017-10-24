class Session < ApplicationRecord
  belongs_to :user
  has_many :liftsets
  serialize :heartrate, Array
  serialize :calories, Array
end
