class MessagesController < ApplicationController
  def index
    if params[:room] || session[:room]
      session[:room] = params[:room]
      @room_messages = Message.where(room:params[:room])
    end
  end

  def create
    @message = Message.new(params[:message])
    @message.room = session[:room]
    @message.author = session[:author]
    @message.save
  end

  def author
    if params[:message][:author].present?
      session[:author] = params[:message][:author]
      @author = session[:author]
    end
  end
end
