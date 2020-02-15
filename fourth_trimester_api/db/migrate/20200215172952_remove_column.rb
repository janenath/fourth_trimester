class RemoveColumn < ActiveRecord::Migration[6.0]
  def change
    remove_column :articles, :contentful_id
    remove_column :articles, :space_id
    remove_column :articles, :access_token
    remove_column :articles, :content_type_id
  end
end
