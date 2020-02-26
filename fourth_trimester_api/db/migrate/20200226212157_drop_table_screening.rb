class DropTableScreening < ActiveRecord::Migration[6.0]
  def change
    drop_table :screenings
  end
end
