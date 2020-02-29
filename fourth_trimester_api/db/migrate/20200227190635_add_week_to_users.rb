class AddWeekToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :week, :integer
    remove_column :users, :due_date
  end
end
