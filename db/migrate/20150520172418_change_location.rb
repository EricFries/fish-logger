class ChangeLocation < ActiveRecord::Migration
  def change
    remove_column :fish, :location
    add_column :fish, :longitude, :string
    add_column :fish, :latitude, :string
  end
end
