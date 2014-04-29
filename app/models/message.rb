class Message < ActiveRecord::Base
  attr_accessible :content, :room, :author
  validates :content, :presence => true
  validates :room, :presence => true
  validates :author, :presence => true
end
