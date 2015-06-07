class Game < ActiveRecord::Base
  has_many :users
  has_many :users, through: :gameusers
  has_many :gameusers
end
