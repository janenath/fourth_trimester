class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password
      t.date :due_date
      t.json :articles
      t.json :scores

      t.timestamps
    end
  end
end
