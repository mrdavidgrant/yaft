class Api::V1::TemplatesController < Api::V1::BaseController

    def index
      get_user
      templates = @user.sessions.where template: true
      render json: {sessions: templates}
    end

    def create
      get_user
      @template = @user.sessions.new name: params[:name]
      @template[:template] = true
      @template.update_attributes
      if params[:liftsets].present?
        @update = params[:liftsets]
        @update.each do |liftset|
          set = @template.liftsets.new
          set.update_attributes liftset
        end
      end
      if @user.save
        render json: {message: "success", template: @template}
      end
    end

    def show
      @template = Session.find params[:id]
      render json: {template: @template, liftsets: @template.liftsets}
    end

    def update
      @template = Session.find params[:id]
      @template[:completed_at] = DateTime.now
      if params[:liftsets].present?
        @update = params[:liftsets]
        @update.each do |liftset|
          set = @template.liftsets.new
          set.update_attributes liftset
        end
      end
      if @template.save
        render json: {message: "success", template: @template, liftsets: @template.liftsets}
      else
        render json: {error: @template.errors.full_messages}
      end
    end

    def destroy
      @template = Session.find params[:id]
      @template.destroy
      render json: {message: 'success'}
    end

    private

    def get_user

      @user = User.find params[:user_user_id]
    # if @user
    # else
    #   render json: @user.errors.full_messages
    end

  end
