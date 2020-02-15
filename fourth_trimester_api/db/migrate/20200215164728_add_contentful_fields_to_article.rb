class AddContentfulFieldsToArticle < ActiveRecord::Migration[6.0]
  def change
    add_column :articles, :contentful_id, :article
  end
end
