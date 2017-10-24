class User < ApplicationRecord
  self.primary_key = "user_id"
  has_many :sessions
  has_one :token

end
