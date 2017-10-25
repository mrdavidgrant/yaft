class AddTemplateToSessions < ActiveRecord::Migration[5.1]
  def change
    add_column :sessions, :template?, :boolean, :default => false
  end
end
