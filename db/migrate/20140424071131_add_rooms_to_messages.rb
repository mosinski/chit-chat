class AddRoomsToMessages < ActiveRecord::Migration
  def self.up
    add_column :messages, :room, :integer
  end

  def self.down
    remove_column :messages, :room
  end
end
