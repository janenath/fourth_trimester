class AddMoreContentfulFieldsToArticle < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :space_id, :string
    add_column :articles, :access_token, :string
    add_column :articles, :content_type_id, :string
  end
end
