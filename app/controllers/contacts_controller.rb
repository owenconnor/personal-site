class ContactsController < ApplicationController

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.new(params[:contact])

    respond_to do |format|
      if !@contact.deliver
        @message = 'error'
      else
        @message = 'success'
      end
      format.js
    end

  end

end