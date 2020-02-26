class RemoveColumns < ActiveRecord::Migration[6.0]
  def change
    remove_column :users, :articles
    remove_column :users, :scores
  end
end
