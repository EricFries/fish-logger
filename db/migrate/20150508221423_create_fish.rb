class CreateFish < ActiveRecord::Migration
  def change
    create_table :fish do |t|
      t.string :species
      t.decimal :weight
      t.string :length
      t.string :location
      t.integer :user_id
      t.datetime :date
      t.timestamps null: false
    end
  end
end
