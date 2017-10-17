class AddBodyPartAndEquipmentToMotions < ActiveRecord::Migration[5.1]
  def change
    add_column :motions, :body_part, :integer
    add_column :motions, :equipment, :integer
  end
end
