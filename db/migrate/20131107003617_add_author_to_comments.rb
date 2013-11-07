class AddAuthorToComments < ActiveRecord::Migration
  def change
		add_column :comments, :author_id, :integer, :null => false, :default => 0
  end
end
