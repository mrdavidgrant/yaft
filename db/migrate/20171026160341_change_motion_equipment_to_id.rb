class ChangeMotionEquipmentToId < ActiveRecord::Migration[5.1]
  def change
    remove_column :liftsets, :motion
    remove_column :liftsets, :equipment
    add_reference :liftsets, :motion, foreign_key: true
    add_reference :liftsets, :equipment, foreign_key: true
  end
end
