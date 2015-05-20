class AddTime < ActiveRecord::Migration
  def change
    add_column :fish, :time, :string
    change_column :fish, :date, :string
  end
end
