class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :alias
      t.string :email
      t.string :phone
      t.string :gender
      t.string :height
      t.string :weight
      t.string :description
      t.string :password_digest 

      t.timestamps null: false
    end
  end
end
