class Gameuser < ActiveRecord::Base
  has_many :games
  belongs_to :game
  has_many :users
  belongs_to :user
end
