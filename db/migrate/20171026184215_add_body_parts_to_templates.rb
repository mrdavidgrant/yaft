class AddBodyPartsToTemplates < ActiveRecord::Migration[5.1]
  def change
    add_reference :sessions, :body_parts, foreign_key: true
  end
end
