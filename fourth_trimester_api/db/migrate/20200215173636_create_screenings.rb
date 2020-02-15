class CreateScreenings < ActiveRecord::Migration[6.0]
  def change
    create_table :screenings do |t|
      t.integer :user_id
      t.date :date
      t.integer :score

      t.timestamps
    end
  end
end
