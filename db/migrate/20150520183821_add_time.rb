class AddTime < ActiveRecord::Migration
  def change
    add_column :fish, :time, :string
  end
end
