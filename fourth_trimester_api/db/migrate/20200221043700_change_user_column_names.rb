class ChangeUserColumnNames < ActiveRecord::Migration[6.0]
  def change
    rename_column :users, :email, :username
    rename_column :users, :password_digest, :password
  end
end
