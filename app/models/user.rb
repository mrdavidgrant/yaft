class User < ApplicationRecord
  self.primary_key = "user_id"
  has_many :activities
  has_one :token

end
