class AddImageNamesToMotions < ActiveRecord::Migration[5.1]
  def change
    add_column :motions, :image, :string
    add_column :body_parts, :image, :string
  end
end
