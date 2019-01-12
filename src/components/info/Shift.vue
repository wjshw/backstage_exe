<template>
<el-main>
  <form class="form-inline clearfix" id="chooseForm" role="form" onsubmit="javascript:return false;">
    <div class="panel search">
      <div class="panel-heading">
        <h3 class="panel-title">查询</h3>
      </div>
      <div class="panel-body">
        <div class="form-inline clearfix">
          <div class="form-group form-group-sm">
            <label for="name" class="">时间范围：</label>
            <div class="input-group input-group-sm">
              <input type="text" class="datetimepicker datetime form-control" readonly="readonly" placeholder="初始时间"
                onClick="WdatePicker({dateFmt:'yyyy-MM-dd HH:mm:ss',onpicked:function(){ShiftLog.select();}})" id="startTime"
                name="startTime">
              <div class="input-group-addon"> —— </div>
              <input type="text" class="datetimepicker datetime form-control" readonly="readonly" placeholder="终止时间"
                onClick="WdatePicker({dateFmt: 'yyyy-MM-dd HH:mm:ss',onpicked:function(){ShiftLog.select();}})" id="endTime"
                name="endTime">
              <!-- <input type="datetime-local" class="form-control" id="endTime" name="endTime"> -->
            </div>
          </div>
          <div class="form-group form-group-sm">
            <label for="name" class="">交班人：</label>
            <input type="text" class="form-control" id="username" name="username">
          </div>
          <!-- <div class="col-sm-2">
                                        <button type="submit" class="btn btn-sm btn-info">筛&nbsp;&nbsp;&nbsp;&nbsp;选</button>
                                    </div> -->
        </div>
      </div>
    </div>
  </form>
  <div class="nav_netbar">
    <ul class="nav nav-pills netnav material_nav">
      <li class="">
        <h5 class="Title">
          <!-- <p style="display:inline-block">实交合计：<span id="totalFee"></span>元</p>
                            <p style="display:inline-block;margin-left: 20px;">预留金额：<span id="currentReserve"></span>元</p> -->
        </h5>
      </li>
      <li class="right-btn">
        <button type="button" class="btn  btn-success btn-sm" onclick="ShiftLog.output();">导出数据</button>
      </li>
    </ul>
  </div>
  <div class="staff_list">
    <div class="row shift_table">
      <div class="col-xs-12" id="tabTemplate">
        <table class="table table-bordered table-condensed">
          <thead>
            <tr>
              <th>交班人</th>
              <th>本班起止时间</th>
              <th>网费现金收入</th>
              <th>网费线上收入</th>
              <th>水吧现金收入</th>
              <th>水吧线上收入</th>
              <th>网费券赠送数量</th>
              <th>网费券总金额</th>
              <th>交班详情</th>
              <th>商品销售</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <button class="btn btn-xs btn-link edit_item" onclick="ShiftLog.selectDetail('{$T.record.submitTime}', '{$T.record.currentnetBarUserName}', '{$T.record.nextnetBarUserName}', '{$T.record.totalAttendance}', '{$T.record.newMemberNum}', '{$T.record.onlineMembers}', '{$T.record.feeByWaterbar.cashpay}', '{parseFloat($T.record.feeByWaterbar.alipay) + parseFloat($T.record.feeByWaterbar.wechatpay)}', '{parseFloat($T.record.feeByNetbar[3].fee)}', '{parseFloat($T.record.feeByNetbar[0].fee) + parseFloat($T.record.feeByNetbar[1].fee) + parseFloat($T.record.feeByNetbar[2].fee)}', '{$T.record.feeByWaterbar.netbarpay}', '{$T.record.feeByOnDeposit.fee}', '{$T.record.feeByWaterbar.cardsum}', '{$T.record.feeByWaterbar.cardcnt}', '{$T.record.feeByWaterbar.turnOverRatio}', '{$T.record.feeByWaterbar.singleIncome}', '{$T.record.feeByWaterbar.netfeeOrderDiscount}', '{$T.record.feeByWaterbar.netfeeConsumeDiscount}', '{$T.record.feeByWaterbar.totalGuestUnitPrice}', '{$T.record.feeByWaterbar.captureRatio}')">查看详情</button>
              </td>
              <td>
                <button class="btn btn-xs btn-link edit_item" data-toggle="modal" data-target="#modal-saleDetail"
                  onclick="ShiftLog.openProduct({$T.record.dutyID},'{$T.record.submitTime}','{$T.record.currentnetBarUserName}', '{$T.record.dutyBeginTime}', '{$T.record.dutyEndTime}', {parseFloat(parseFloat($T.record.feeByWaterbar.cashpay) + parseFloat($T.record.feeByWaterbar.alipay) + parseFloat($T.record.feeByWaterbar.wechatpay) + parseFloat($T.record.feeByWaterbar.netbarpay))/100})">查看详情</button>
              </td>
              <td><button class="btn btn-xs btn-link edit_item" onclick="ShiftLog.outputDutyDetail({$T.record.dutyID})">导出数据</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="pull-right" id="pageList">
    </div>
    <div class="clearfix"></div>
    <div class="bill_help">
      <h4><span class="glyphicon glyphicon-question-sign"></span>小提示</h4>
      <ul>
        <li>
          <ol>
            <li>翻机率：上机总人次/总机器数；</li>
            <li>单机收入：网费总收入/机器数；</li>
            <li>网费充增折扣：本金/本金+赠费；</li>
            <li>网费消耗折扣：本金/本金+赠送；</li>
            <li>总客单价：网费+水吧总收入/人次；</li>
            <li>捕获率：水吧下单总数/人次；</li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
</el-main>
</template>

<script>
export default {
  name: 'Analysis',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
</style>
