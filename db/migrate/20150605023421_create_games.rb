class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :title
      t.string :court_name
      t.string :court_address
      t.string :sport
      t.string :game_at
      t.integer :spots
      t.decimal :fee
      t.string :description


      t.timestamps null: false
    end
  end
end
