class AddAuthorToMessages < ActiveRecord::Migration
  def self.up
    add_column :messages, :author, :string
  end

  def self.down
    remove_column :messages, :author
  end
end
