class DropTableTip < ActiveRecord::Migration[6.0]
  def change
    drop_table :tips
  end
end
