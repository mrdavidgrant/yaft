class AddBodyPartAndEquipmentToMotions < ActiveRecord::Migration[5.1]
  def change
    add_column :motions, :body_part, :integer
    add_column :liftsets, :equipment, :integer
  end
end