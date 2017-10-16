class User < ApplicationRecord
  has_secure_password

  validates :email, presence: true, uniqueness: true
  validates :username, uniqueness: true, allow_nil: true

  has_many :sessions

end
