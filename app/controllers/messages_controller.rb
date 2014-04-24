class MessagesController < ApplicationController
  def index
    if params[:room] || session[:room]
      session[:room] = params[:room]
      @room_messages = Message.where(room:params[:room])
    end
  end

  def create
    @message = Message.create!(params[:message])
  end
end
