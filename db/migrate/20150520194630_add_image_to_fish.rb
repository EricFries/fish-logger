class AddImageToFish < ActiveRecord::Migration
  def self.up
    add_attachment :fish, :image
  end

  def self.down
    remove_attachment :fish, :image
  end
end
