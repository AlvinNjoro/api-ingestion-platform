// AUTO-GENERATED: one developed function per documented interface.
// Source: endpoints.oceanengine.json (pulled from the official docs).
// Each function targets the correct path + HTTP method and uses the stored
// Access-Token. Business parameters specific to an endpoint are passed in
// `params` (look up an endpoint's required fields in its doc when calling).

const HOST = 'https://api.oceanengine.com';

export async function oeRequest(path: string, method: string, advertiserId: string | number, params: Record<string, any>, token: string): Promise<any> {
  const headers: Record<string,string> = { 'Access-Token': token, 'Content-Type': 'application/json' };
  let url = HOST + path; let body: string | undefined;
  if (method === 'GET') {
    const flat: Record<string,string> = { advertiser_id: String(advertiserId) };
    for (const [k,v] of Object.entries(params)) flat[k] = typeof v === 'string' ? v : JSON.stringify(v);
    url += '?' + new URLSearchParams(flat).toString();
  } else { body = JSON.stringify({ advertiser_id: Number(advertiserId), ...params }); }
  const res = await fetch(url, { method, headers, body });
  return res.json();
}

/** 代理商违规信息推送-千川  [POST /open_api/2/agent/query/risk_promotion_list/] */
export function agent_query_risk_promotion_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/query/risk_promotion_list/', 'POST', advertiserId, params, token);
}

/** 千川全域计划变更消息  [GET /open_api/v1.0/qianchuan/uni_promotion/list/] */
export function qianchuan_uni_promotion_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/list/', 'GET', advertiserId, params, token);
}

/** 非积分处置事件  [GET /open_api/v3.0/security/non_score_disposal_info/get/] */
export function security_non_score_disposal_info_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/security/non_score_disposal_info/get/', 'GET', advertiserId, params, token);
}

/** 新增 Adv 订阅  [POST /open_api/v3.0/subscribe/accounts/add/] */
export function subscribe_accounts_add(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/subscribe/accounts/add/', 'POST', advertiserId, params, token);
}

/** 查询订阅 Adv  [GET /open_api/v3.0/subscribe/accounts/list/] */
export function subscribe_accounts_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/subscribe/accounts/list/', 'GET', advertiserId, params, token);
}

/** 取消 Adv 订阅  [POST /open_api/v3.0/subscribe/accounts/remove/] */
export function subscribe_accounts_remove(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/subscribe/accounts/remove/', 'POST', advertiserId, params, token);
}

/** 获取Access Token  [POST /open_api/oauth2/access_token/] */
export function oauth2_access_token(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/oauth2/access_token/', 'POST', advertiserId, params, token);
}

/** 刷新Token  [POST /open_api/oauth2/refresh_token/] */
export function oauth2_refresh_token(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/oauth2/refresh_token/', 'POST', advertiserId, params, token);
}

/** 获取授权User信息  [GET /open_api/2/user/info/] */
export function user_info(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/user/info/', 'GET', advertiserId, params, token);
}

/** 获取已授权的账户（店铺/代理商/旧版巨量引擎工作台）  [GET /open_api/oauth2/advertiser/get/] */
export function oauth2_advertiser_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/oauth2/advertiser/get/', 'GET', advertiserId, params, token);
}

/** 抖音号授权  [POST /open_api/v1.0/qianchuan/tools/aweme_auth/] */
export function qianchuan_tools_aweme_auth(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/tools/aweme_auth/', 'POST', advertiserId, params, token);
}

/** 全域授权初始化  [POST /open_api/v1.0/qianchuan/uni_promotion/auth/init/] */
export function qianchuan_uni_promotion_auth_init(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/auth/init/', 'POST', advertiserId, params, token);
}

/** 店铺新客定向授权  [POST /open_api/v1.0/qianchuan/tools/shop_auth/] */
export function qianchuan_tools_shop_auth(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/tools/shop_auth/', 'POST', advertiserId, params, token);
}

/** 获取店铺账户关联的投放账户列表  [GET /open_api/v1.0/qianchuan/shop/advertiser/list/] */
export function qianchuan_shop_advertiser_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/shop/advertiser/list/', 'GET', advertiserId, params, token);
}

/** 获取千川账户下可投放抖音号  [GET /open_api/v1.0/qianchuan/aweme/authorized/get/] */
export function qianchuan_aweme_authorized_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/authorized/get/', 'GET', advertiserId, params, token);
}

/** 获取千川账户下抖音号授权列表  [GET /open_api/v1.0/qianchuan/aweme_auth_list/get/] */
export function qianchuan_aweme_auth_list_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme_auth_list/get/', 'GET', advertiserId, params, token);
}

/** 投放账户信息查询  [GET /open_api/2/agent/advertiser_info/query/] */
export function agent_advertiser_info_query(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/advertiser_info/query/', 'GET', advertiserId, params, token);
}

/** 获取店铺账户信息  [GET /open_api/v1.0/qianchuan/shop/get/] */
export function qianchuan_shop_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/shop/get/', 'GET', advertiserId, params, token);
}

/** 获取千川投放账户基础信息  [POST /open_api/2/advertiser/public_info/] */
export function advertiser_public_info(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/public_info/', 'POST', advertiserId, params, token);
}

/** 获取千川投放账户全量信息  [GET /open_api/2/advertiser/info/] */
export function advertiser_info(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/info/', 'GET', advertiserId, params, token);
}

/** 获取千川账户类型  [GET /open_api/v1.0/qianchuan/advertiser/type/get/] */
export function qianchuan_advertiser_type_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/advertiser/type/get/', 'GET', advertiserId, params, token);
}

/** 获取代理商账户信息  [GET /open_api/2/agent/info/] */
export function agent_info(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/info/', 'GET', advertiserId, params, token);
}

/** 获取代理商账户关联的投放账户列表  [GET /open_api/2/agent/advertiser/select/] */
export function agent_advertiser_select(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/advertiser/select/', 'GET', advertiserId, params, token);
}

/** 获取纵横工作台下账户列表  [GET /open_api/2/customer_center/advertiser/list/] */
export function customer_center_advertiser_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/customer_center/advertiser/list/', 'GET', advertiserId, params, token);
}

/** 获取升级版巨量引擎工作台下账户列表  [GET /open_api/2/ebp/advertiser/list/] */
export function ebp_advertiser_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/ebp/advertiser/list/', 'GET', advertiserId, params, token);
}

/** 创建小钱包  [POST /open_api/v3.0/shared_wallet/sub_wallet/create/] */
export function shared_wallet_sub_wallet_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/sub_wallet/create/', 'POST', advertiserId, params, token);
}

/** 资金共享-获取唯一操作id  [GET /open_api/v3.0/ad_billing/unique_id/get/] */
export function ad_billing_unique_id_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/ad_billing/unique_id/get/', 'GET', advertiserId, params, token);
}

/** 获取账户钱包信息  [GET /open_api/v1.0/qianchuan/finance/wallet/get/] */
export function qianchuan_finance_wallet_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/finance/wallet/get/', 'GET', advertiserId, params, token);
}

/** 获取账户余额  [GET /open_api/v1.0/qianchuan/account/balance/get/] */
export function qianchuan_account_balance_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/account/balance/get/', 'GET', advertiserId, params, token);
}

/** 获取财务流水信息  [GET /open_api/v1.0/qianchuan/finance/detail/get/] */
export function qianchuan_finance_detail_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/finance/detail/get/', 'GET', advertiserId, params, token);
}

/** 查询财务流水明细  [GET /open_api/2/advertiser/fund/transaction/get/] */
export function advertiser_fund_transaction_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/fund/transaction/get/', 'GET', advertiserId, params, token);
}

/** 【代理商】批量查询账户余额  [GET /open_api/v3.0/account/fund/get/] */
export function account_fund_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/account/fund/get/', 'GET', advertiserId, params, token);
}

/** 转账-查询账户转账余额（代理）  [POST /open_api/v3.0/cg_transfer/query_transfer_balance/] */
export function cg_transfer_query_transfer_balance(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/query_transfer_balance/', 'POST', advertiserId, params, token);
}

/** 转账-获取最大可转余额（代理）  [POST /open_api/v3.0/cg_transfer/query_can_transfer_balance/] */
export function cg_transfer_query_can_transfer_balance(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/query_can_transfer_balance/', 'POST', advertiserId, params, token);
}

/** 转账-发起转账（代理）  [POST /open_api/v3.0/cg_transfer/create_transfer/] */
export function cg_transfer_create_transfer(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/create_transfer/', 'POST', advertiserId, params, token);
}

/** 转账-查询转账单信息（代理）  [POST /open_api/v3.0/cg_transfer/query_transfer_detail/] */
export function cg_transfer_query_transfer_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/query_transfer_detail/', 'POST', advertiserId, params, token);
}

/** 工作台转账-获取可转列表  [GET /open_api/v3.0/cg_transfer/can_transfer_target/list/] */
export function cg_transfer_can_transfer_target_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/can_transfer_target/list/', 'GET', advertiserId, params, token);
}

/** 工作台转账-获取最大可转余额  [GET /open_api/v3.0/cg_transfer/can_transfer_balance/get/] */
export function cg_transfer_can_transfer_balance_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/can_transfer_balance/get/', 'GET', advertiserId, params, token);
}

/** 工作台转账-查询账户转账余额  [GET /open_api/v3.0/cg_transfer/transfer_balance/get/] */
export function cg_transfer_transfer_balance_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/transfer_balance/get/', 'GET', advertiserId, params, token);
}

/** 工作台转账-发起转账  [POST /open_api/v3.0/cg_transfer/transfer/create/] */
export function cg_transfer_transfer_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/transfer/create/', 'POST', advertiserId, params, token);
}

/** 工作台转账-查询转账单信息  [GET /open_api/v3.0/cg_transfer/transfer_detail/get/] */
export function cg_transfer_transfer_detail_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/transfer_detail/get/', 'GET', advertiserId, params, token);
}

/** 代理商充值校验  [POST /open_api/2/agent/charge/verify/] */
export function agent_charge_verify(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/charge/verify/', 'POST', advertiserId, params, token);
}

/** 代理商提交授信充值  [POST /open_api/2/agent/credit_charge/submit/] */
export function agent_credit_charge_submit(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/credit_charge/submit/', 'POST', advertiserId, params, token);
}

/** 查询充值结果  [POST /open_api/v3.0/charge/result/] */
export function charge_result(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/charge/result/', 'POST', advertiserId, params, token);
}

/** 查询代理商充值记录  [POST /open_api/2/agent/adv/recharge/recharge_record/] */
export function agent_adv_recharge_recharge_record(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/adv/recharge/recharge_record/', 'POST', advertiserId, params, token);
}

/** 代理商预付充值生成汇款码  [POST /open_api/2/agent/prepay_charge/generate_remittance_code/] */
export function agent_prepay_charge_generate_remittance_code(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/prepay_charge/generate_remittance_code/', 'POST', advertiserId, params, token);
}

/** 查询汇款码列表信息  [GET /open_api/v3.0/remittance_code/list/] */
export function remittance_code_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/remittance_code/list/', 'GET', advertiserId, params, token);
}

/** 资金共享-查询ADV粒度操作记录  [GET /open_api/v3.0/shared_wallet/wallet_adv_operation_log/get/] */
export function shared_wallet_wallet_adv_operation_log_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/wallet_adv_operation_log/get/', 'GET', advertiserId, params, token);
}

/** 资金共享-查询钱包粒度操作记录  [GET /open_api/v3.0/shared_wallet/wallet_operation_log/get/] */
export function shared_wallet_wallet_operation_log_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/wallet_operation_log/get/', 'GET', advertiserId, params, token);
}

/** 资金共享-钱包绑定/解绑  [POST /open_api/v3.0/shared_wallet/shared_relation/create/] */
export function shared_wallet_shared_relation_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/shared_relation/create/', 'POST', advertiserId, params, token);
}

/** 获取账户日预算  [GET /open_api/v1.0/qianchuan/account/budget/get/] */
export function qianchuan_account_budget_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/account/budget/get/', 'GET', advertiserId, params, token);
}

/** 更新账户日预算  [POST /open_api/v1.0/qianchuan/account/budget/update/] */
export function qianchuan_account_budget_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/account/budget/update/', 'POST', advertiserId, params, token);
}

/** 计划组创建  [POST /open_api/v1.0/qianchuan/campaign/create/] */
export function qianchuan_campaign_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/campaign/create/', 'POST', advertiserId, params, token);
}

/** 计划组更新  [POST /open_api/v1.0/qianchuan/campaign/update/] */
export function qianchuan_campaign_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/campaign/update/', 'POST', advertiserId, params, token);
}

/** 计划组状态更新  [POST /open_api/v1.0/qianchuan/batch_campaign_status/update/] */
export function qianchuan_batch_campaign_status_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/batch_campaign_status/update/', 'POST', advertiserId, params, token);
}

/** 计划组列表获取  [GET /open_api/v1.0/qianchuan/campaign_list/get/] */
export function qianchuan_campaign_list_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/campaign_list/get/', 'GET', advertiserId, params, token);
}

/** 创建推直播计划（含创意生成规则）  [POST /open_api/v1.0/qianchuan/ad/create/] */
export function qianchuan_ad_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/create/', 'POST', advertiserId, params, token);
}

/** 更新推直播计划（含创意生成规则）  [POST /open_api/v1.0/qianchuan/ad/update/] */
export function qianchuan_ad_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/update/', 'POST', advertiserId, params, token);
}

/** 获取计划详情（含创意信息）  [GET /open_api/v1.0/qianchuan/ad/detail/get/] */
export function qianchuan_ad_detail_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/detail/get/', 'GET', advertiserId, params, token);
}

/** 获取账户下计划列表（不含创意）  [GET /open_api/v1.0/qianchuan/ad/get/] */
export function qianchuan_ad_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/get/', 'GET', advertiserId, params, token);
}

/** 更新计划状态  [POST /open_api/v1.0/qianchuan/ad/status/update/] */
export function qianchuan_ad_status_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/status/update/', 'POST', advertiserId, params, token);
}

/** 更新计划预算  [POST /open_api/v1.0/qianchuan/ad/budget/update/] */
export function qianchuan_ad_budget_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/budget/update/', 'POST', advertiserId, params, token);
}

/** 更新计划出价  [POST /open_api/v1.0/qianchuan/ad/bid/update/] */
export function qianchuan_ad_bid_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/bid/update/', 'POST', advertiserId, params, token);
}

/** 更新计划的支付ROI目标  [POST /open_api/v1.0/qianchuan/roi/goal/update/] */
export function qianchuan_roi_goal_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/roi/goal/update/', 'POST', advertiserId, params, token);
}

/** 更新计划投放时间  [POST /open_api/v1.0/qianchuan/ad/schedule_date/update/] */
export function qianchuan_ad_schedule_date_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/schedule_date/update/', 'POST', advertiserId, params, token);
}

/** 更新计划投放时段  [POST /open_api/v1.0/qianchuan/ad/schedule_time/update/] */
export function qianchuan_ad_schedule_time_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/schedule_time/update/', 'POST', advertiserId, params, token);
}

/** 更新计划投放时长  [POST /open_api/v1.0/qianchuan/ad/schedule_fixed_range/update/] */
export function qianchuan_ad_schedule_fixed_range_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/schedule_fixed_range/update/', 'POST', advertiserId, params, token);
}

/** 更新计划地域定向  [POST /open_api/v1.0/qianchuan/ad/region/update/] */
export function qianchuan_ad_region_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/region/update/', 'POST', advertiserId, params, token);
}

/** 获取计划审核建议  [POST /open_api/v1.0/qianchuan/ad/reject_reason/] */
export function qianchuan_ad_reject_reason(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/reject_reason/', 'POST', advertiserId, params, token);
}

/** 获取低效计划列表  [GET /open_api/v1.0/qianchuan/lq_ad/get/] */
export function qianchuan_lq_ad_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/lq_ad/get/', 'GET', advertiserId, params, token);
}

/** 获取支付ROI目标建议  [GET /open_api/v1.0/qianchuan/suggest/roi/goal/] */
export function qianchuan_suggest_roi_goal(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/suggest/roi/goal/', 'GET', advertiserId, params, token);
}

/** 获取非ROI目标建议出价  [GET /open_api/v1.0/qianchuan/suggest_bid/] */
export function qianchuan_suggest_bid(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/suggest_bid/', 'GET', advertiserId, params, token);
}

/** 获取建议预算接口  [GET /open_api/v1.0/qianchuan/suggest/budget/] */
export function qianchuan_suggest_budget(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/suggest/budget/', 'GET', advertiserId, params, token);
}

/** 获取预估效果接口  [POST /open_api/v1.0/qianchuan/estimate/effect/] */
export function qianchuan_estimate_effect(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/estimate/effect/', 'POST', advertiserId, params, token);
}

/** 获取计划成本保障状态  [GET /open_api/v1.0/qianchuan/ad/compensate_status/get/] */
export function qianchuan_ad_compensate_status_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/compensate_status/get/', 'GET', advertiserId, params, token);
}

/** 获取计划学习期状态  [GET /open_api/v1.0/qianchuan/ad/learing_status/get/] */
export function qianchuan_ad_learing_status_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/learing_status/get/', 'GET', advertiserId, params, token);
}

/** 获取账户下素材列表  [GET /open_api/v1.0/qianchuan/material/get/] */
export function qianchuan_material_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/material/get/', 'GET', advertiserId, params, token);
}

/** 获取计划下素材列表  [GET /open_api/v1.0/qianchuan/ad/material/get/] */
export function qianchuan_ad_material_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/material/get/', 'GET', advertiserId, params, token);
}

/** 获取素材关联计划  [GET /open_api/v1.0/qianchuan/material/ad/get/] */
export function qianchuan_material_ad_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/material/ad/get/', 'GET', advertiserId, params, token);
}

/** 计划下素材审核建议  [POST /open_api/v1.0/qianchuan/ad/material/suggestion/] */
export function qianchuan_ad_material_suggestion(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/material/suggestion/', 'POST', advertiserId, params, token);
}

/** 删除投放计划下素材  [POST /open_api/v1.0/qianchuan/ad/material/delete/] */
export function qianchuan_ad_material_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/material/delete/', 'POST', advertiserId, params, token);
}

/** 商家获取可投商品列表  [GET /open_api/v1.0/qianchuan/product/available/get/] */
export function qianchuan_product_available_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/product/available/get/', 'GET', advertiserId, params, token);
}

/** 达人获取可投商品列表  [GET /open_api/v1.0/qianchuan/aweme/product/available/get/] */
export function qianchuan_aweme_product_available_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/product/available/get/', 'GET', advertiserId, params, token);
}

/** 获取客户绑定的品牌列表  [GET /open_api/v1.0/qianchuan/brand/authorized/get/] */
export function qianchuan_brand_authorized_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/brand/authorized/get/', 'GET', advertiserId, params, token);
}

/** 获取客户绑定的店铺列表  [GET /open_api/v1.0/qianchuan/shop/authorized/get/] */
export function qianchuan_shop_authorized_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/shop/authorized/get/', 'GET', advertiserId, params, token);
}

/** 获取词包推荐关键词  [GET /open_api/v1.0/qianchuan/keyword_package/get/] */
export function qianchuan_keyword_package_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/keyword_package/get/', 'GET', advertiserId, params, token);
}

/** 获取计划的搜索关键词  [GET /open_api/v1.0/qianchuan/ad/keywords/get/] */
export function qianchuan_ad_keywords_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/keywords/get/', 'GET', advertiserId, params, token);
}

/** 更新关键词  [POST /open_api/v1.0/qianchuan/ad/keywords/update/] */
export function qianchuan_ad_keywords_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/keywords/update/', 'POST', advertiserId, params, token);
}

/** 获取系统推荐的搜索关键词  [GET /open_api/v1.0/qianchuan/ad/recommend_keywords/get/] */
export function qianchuan_ad_recommend_keywords_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/recommend_keywords/get/', 'GET', advertiserId, params, token);
}

/** 关键词合规校验  [POST /open_api/v1.0/qianchuan/keyword/check/] */
export function qianchuan_keyword_check(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/keyword/check/', 'POST', advertiserId, params, token);
}

/** 获取否定词列表  [GET /open_api/v1.0/qianchuan/ad/pivativewords/get/] */
export function qianchuan_ad_pivativewords_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/pivativewords/get/', 'GET', advertiserId, params, token);
}

/** 全量更新否定词  [POST /open_api/v1.0/qianchuan/ad/pivativewords/update/] */
export function qianchuan_ad_pivativewords_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/pivativewords/update/', 'POST', advertiserId, params, token);
}

/** 全域计划升级为乘方计划  [POST /open_api/v1.0/qianchuan/ad/overall_marketing/update/] */
export function qianchuan_ad_overall_marketing_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/overall_marketing/update/', 'POST', advertiserId, params, token);
}

/** 获取全域投放抖音号列表  [GET /open_api/v1.0/qianchuan/uni_aweme/authorized/get/] */
export function qianchuan_uni_aweme_authorized_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_aweme/authorized/get/', 'GET', advertiserId, params, token);
}

/** 获取商品全域可授权店铺列表  [GET /open_api/v1.0/qianchuan/uni_promotion/authorizable_shop/list/] */
export function qianchuan_uni_promotion_authorizable_shop_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/authorizable_shop/list/', 'GET', advertiserId, params, token);
}

/** 客户申请全域投放授权  [POST /open_api/v1.0/qianchuan/uni_promotion/authorization/apply/] */
export function qianchuan_uni_promotion_authorization_apply(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/authorization/apply/', 'POST', advertiserId, params, token);
}

/** 新建全域投放计划  [POST /open_api/v1.0/qianchuan/uni_aweme/ad/create/] */
export function qianchuan_uni_aweme_ad_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_aweme/ad/create/', 'POST', advertiserId, params, token);
}

/** 编辑全域投放计划  [POST /open_api/v1.0/qianchuan/uni_aweme/ad/update/] */
export function qianchuan_uni_aweme_ad_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_aweme/ad/update/', 'POST', advertiserId, params, token);
}

/** 更改全域投放计划状态  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/status/update/] */
export function qianchuan_uni_promotion_ad_status_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/status/update/', 'POST', advertiserId, params, token);
}

/** 获取全域&乘方投放计划详情  [GET /open_api/v1.0/qianchuan/uni_promotion/ad/detail/] */
export function qianchuan_uni_promotion_ad_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/detail/', 'GET', advertiserId, params, token);
}

/** 获取全域投放计划下素材  [GET /open_api/v1.0/qianchuan/uni_promotion/ad/material/get/] */
export function qianchuan_uni_promotion_ad_material_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/material/get/', 'GET', advertiserId, params, token);
}

/** 添加全域投放计划下素材  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/material/add/] */
export function qianchuan_uni_promotion_ad_material_add(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/material/add/', 'POST', advertiserId, params, token);
}

/** 删除全域投放计划下素材  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/material/delete/] */
export function qianchuan_uni_promotion_ad_material_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/material/delete/', 'POST', advertiserId, params, token);
}

/** 获取全域计划下商品列表  [GET /open_api/v1.0/qianchuan/uni_promotion/ad/product/get/] */
export function qianchuan_uni_promotion_ad_product_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/product/get/', 'GET', advertiserId, params, token);
}

/** 删除全域计划下商品  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/product/delete/] */
export function qianchuan_uni_promotion_ad_product_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/product/delete/', 'POST', advertiserId, params, token);
}

/** 删除乘方商品乘方下的抖音号  [POST /open_api/v1.0/qianchuan/overall_aweme/aweme/delete/] */
export function qianchuan_overall_aweme_aweme_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/overall_aweme/aweme/delete/', 'POST', advertiserId, params, token);
}

/** 全域达人/机构获取可选商品列表  [GET /open_api/v1.0/qianchuan/uni_promotion/product/aweme/get/] */
export function qianchuan_uni_promotion_product_aweme_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/product/aweme/get/', 'GET', advertiserId, params, token);
}

/** 全域商家可选商品列表  [GET /open_api/v1.0/qianchuan/uni_promotion/product/get/] */
export function qianchuan_uni_promotion_product_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/product/get/', 'GET', advertiserId, params, token);
}

/** 获取全域可排除抖音视频/图文列表  [GET /open_api/v1.0/qianchuan/uni_promotion/block_material/get/] */
export function qianchuan_uni_promotion_block_material_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/block_material/get/', 'GET', advertiserId, params, token);
}

/** 获取全域建议预算  [GET /open_api/v1.0/qianchuan/uni_aweme/suggest/budget/] */
export function qianchuan_uni_aweme_suggest_budget(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_aweme/suggest/budget/', 'GET', advertiserId, params, token);
}

/** 获取全域计划审核建议  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/suggestion/] */
export function qianchuan_uni_promotion_ad_suggestion(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/suggestion/', 'POST', advertiserId, params, token);
}

/** 更新商品全域投放计划名称  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/name/update/] */
export function qianchuan_uni_promotion_ad_name_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/name/update/', 'POST', advertiserId, params, token);
}

/** 更新全域投放计划预算  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/budget/update/] */
export function qianchuan_uni_promotion_ad_budget_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/budget/update/', 'POST', advertiserId, params, token);
}

/** 获取全域投放控成本计划建议支付ROI目标  [POST /open_api/v1.0/qianchuan/uni_aweme/suggest/roi/] */
export function qianchuan_uni_aweme_suggest_roi(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_aweme/suggest/roi/', 'POST', advertiserId, params, token);
}

/** 更新全域投放控成本计划支付ROI目标  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/roi2_goal/update/] */
export function qianchuan_uni_promotion_ad_roi2_goal_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/roi2_goal/update/', 'POST', advertiserId, params, token);
}

/** 更新全域投放计划投放时间  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/schedule_date/update/] */
export function qianchuan_uni_promotion_ad_schedule_date_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/schedule_date/update/', 'POST', advertiserId, params, token);
}

/** 获取投放账户数据  [GET /open_api/v1.0/qianchuan/report/advertiser/get/] */
export function qianchuan_report_advertiser_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/advertiser/get/', 'GET', advertiserId, params, token);
}

/** 获取投放计划数据  [GET /open_api/v1.0/qianchuan/report/ad/get/] */
export function qianchuan_report_ad_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/ad/get/', 'GET', advertiserId, params, token);
}

/** 获取计划下素材数据  [GET /open_api/v1.0/qianchuan/report/ad/material/get/] */
export function qianchuan_report_ad_material_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/ad/material/get/', 'GET', advertiserId, params, token);
}

/** 获取投放素材数据  [GET /open_api/v1.0/qianchuan/report/material/get/] */
export function qianchuan_report_material_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/material/get/', 'GET', advertiserId, params, token);
}

/** 获取搜索词/关键词数据  [GET /open_api/v1.0/qianchuan/report/search_word/get/] */
export function qianchuan_report_search_word_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/search_word/get/', 'GET', advertiserId, params, token);
}

/** 视频互动流失数据  [GET /open_api/v1.0/qianchuan/report/video_user_lose/get/] */
export function qianchuan_report_video_user_lose_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/video_user_lose/get/', 'GET', advertiserId, params, token);
}

/** 获取自定义报表可用指标和维度  [GET /open_api/v1.0/qianchuan/report/custom/config/get/] */
export function qianchuan_report_custom_config_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/custom/config/get/', 'GET', advertiserId, params, token);
}

/** 自定义报表  [GET /open_api/v1.0/qianchuan/report/custom/get/] */
export function qianchuan_report_custom_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/custom/get/', 'GET', advertiserId, params, token);
}

/** 获取今日直播数据  [GET /open_api/v1.0/qianchuan/report/live/get/] */
export function qianchuan_report_live_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/live/get/', 'GET', advertiserId, params, token);
}

/** 获取今日直播间列表  [GET /open_api/v1.0/qianchuan/today_live/room/get/] */
export function qianchuan_today_live_room_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/today_live/room/get/', 'GET', advertiserId, params, token);
}

/** 获取直播间详情  [GET /open_api/v1.0/qianchuan/today_live/room/detail/get/] */
export function qianchuan_today_live_room_detail_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/today_live/room/detail/get/', 'GET', advertiserId, params, token);
}

/** 获取直播间流量表现  [GET /open_api/v1.0/qianchuan/today_live/room/flow_performance/get/] */
export function qianchuan_today_live_room_flow_performance_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/today_live/room/flow_performance/get/', 'GET', advertiserId, params, token);
}

/** 获取直播间商品列表  [GET /open_api/v1.0/qianchuan/today_live/room/product_list/get/] */
export function qianchuan_today_live_room_product_list_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/today_live/room/product_list/get/', 'GET', advertiserId, params, token);
}

/** 获取直播大屏可用指标和维度  [GET /open_api/v1.0/qianchuan/qianchuan/report/today_live/room/config/get/] */
export function qianchuan_qianchuan_report_today_live_room_config_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/qianchuan/report/today_live/room/config/get/', 'GET', advertiserId, params, token);
}

/** 获取直播大屏数据  [GET /open_api/v1.0/qianchuan/report/today_live/room/data/get/] */
export function qianchuan_report_today_live_room_data_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/today_live/room/data/get/', 'GET', advertiserId, params, token);
}

/** 获取直播间用户洞察  [GET /open_api/v1.0/qianchuan/today_live/room/user/get/] */
export function qianchuan_today_live_room_user_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/today_live/room/user/get/', 'GET', advertiserId, params, token);
}

/** 代理商消耗报表  [GET /open_api/2/agent/adv/cost_report/list/query/] */
export function agent_adv_cost_report_list_query(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/adv/cost_report/list/query/', 'GET', advertiserId, params, token);
}

/** 获取长周期订单明细可用指标和维度  [GET /open_api/v1.0/qianchuan/report/long_transfer/order/config/get/] */
export function qianchuan_report_long_transfer_order_config_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/long_transfer/order/config/get/', 'GET', advertiserId, params, token);
}

/** 获取长周期订单数据  [GET /open_api/v1.0/qianchuan/report/long_transfer/order/data/get/] */
export function qianchuan_report_long_transfer_order_data_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/long_transfer/order/data/get/', 'GET', advertiserId, params, token);
}

/** 获取千川投放账户维度数据  [GET /open_api/v1.0/qianchuan/report/all_promotion/get/] */
export function qianchuan_report_all_promotion_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/all_promotion/get/', 'GET', advertiserId, params, token);
}

/** 获取全域投放账户维度数据  [GET /open_api/v1.0/qianchuan/report/uni_promotion/get/] */
export function qianchuan_report_uni_promotion_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/uni_promotion/get/', 'GET', advertiserId, params, token);
}

/** 获取千川数据报表-可用维度和指标  [GET /open_api/v1.0/qianchuan/report/uni_promotion/config/get/] */
export function qianchuan_report_uni_promotion_config_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/uni_promotion/config/get/', 'GET', advertiserId, params, token);
}

/** 获取千川数据报表数据  [GET /open_api/v1.0/qianchuan/report/uni_promotion/data/get/] */
export function qianchuan_report_uni_promotion_data_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/uni_promotion/data/get/', 'GET', advertiserId, params, token);
}

/** 获取全域投放直播间维度数据  [GET /open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/room/get/] */
export function qianchuan_report_uni_promotion_dimension_data_room_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/room/get/', 'GET', advertiserId, params, token);
}

/** 获取全域投放抖音号维度数据  [GET /open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/author/get/] */
export function qianchuan_report_uni_promotion_dimension_data_author_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/report/uni_promotion/dimension_data/author/get/', 'GET', advertiserId, params, token);
}

/** 获取随心推全域账户数据  [POST /open_api/v1.0/qianchuan/aweme/uni_promotion/report/] */
export function qianchuan_aweme_uni_promotion_report(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/uni_promotion/report/', 'POST', advertiserId, params, token);
}

/** 获取随心推全域订单数据  [GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/report/get/] */
export function qianchuan_aweme_uni_promotion_order_report_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/uni_promotion/order/report/get/', 'GET', advertiserId, params, token);
}

/** 创建随心推全域订单  [POST /open_api/v1.0/qianchuan/aweme/uni_promotion/order/create/] */
export function qianchuan_aweme_uni_promotion_order_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/uni_promotion/order/create/', 'POST', advertiserId, params, token);
}

/** 获取随心推全域订单列表  [GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/get/] */
export function qianchuan_aweme_uni_promotion_order_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/uni_promotion/order/get/', 'GET', advertiserId, params, token);
}

/** 获取随心推全域订单下素材列表  [GET /open_api/v1.0/qianchuan/aweme/uni_promotion/ad/material/get/] */
export function qianchuan_aweme_uni_promotion_ad_material_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/uni_promotion/ad/material/get/', 'GET', advertiserId, params, token);
}

/** 获取随心推全域订单详情  [GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/detail/] */
export function qianchuan_aweme_uni_promotion_order_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/uni_promotion/order/detail/', 'GET', advertiserId, params, token);
}

/** 获取随心推全域投放建议  [POST /open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/] */
export function qianchuan_aweme_uni_promotion_suggest(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/', 'POST', advertiserId, params, token);
}

/** 获取随心推全域投放效果预估  [POST /open_api/v1.0/qianchuan/aweme/uni_promotion/estimate/effect/] */
export function qianchuan_aweme_uni_promotion_estimate_effect(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/uni_promotion/estimate/effect/', 'POST', advertiserId, params, token);
}

/** 获取随心推全域手动出价计划建议ROI  [POST /open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/roi/] */
export function qianchuan_aweme_uni_promotion_suggest_roi(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/uni_promotion/suggest/roi/', 'POST', advertiserId, params, token);
}

/** 获取随心推全域续费建议延长时长  [GET /open_api/v1.0/qianchuan/aweme/uni_promotion/order/suggest/delivery_time/get/] */
export function qianchuan_aweme_uni_promotion_order_suggest_delivery_time_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/uni_promotion/order/suggest/delivery_time/get/', 'GET', advertiserId, params, token);
}

/** 追加随心推全域订单预算  [POST /open_api/v1.0/qianchuan/aweme/uni_promotion/order/budget/add/] */
export function qianchuan_aweme_uni_promotion_order_budget_add(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/uni_promotion/order/budget/add/', 'POST', advertiserId, params, token);
}

/** 创建随心推订单  [POST /open_api/v1.0/qianchuan/aweme/order/create/] */
export function qianchuan_aweme_order_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/order/create/', 'POST', advertiserId, params, token);
}

/** 终止随心推标准/全域订单  [POST /open_api/v1.0/qianchuan/aweme/order/terminate/] */
export function qianchuan_aweme_order_terminate(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/order/terminate/', 'POST', advertiserId, params, token);
}

/** 获取随心推订单列表  [GET /open_api/v1.0/qianchuan/aweme/order/get/] */
export function qianchuan_aweme_order_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/order/get/', 'GET', advertiserId, params, token);
}

/** 获取随心推订单详情  [GET /open_api/v1.0/qianchuan/aweme/order/detail/get/] */
export function qianchuan_aweme_order_detail_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/order/detail/get/', 'GET', advertiserId, params, token);
}

/** 获取随心推订单数据  [GET /open_api/v1.0/qianchuan/aweme/report/order/get/] */
export function qianchuan_aweme_report_order_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/report/order/get/', 'GET', advertiserId, params, token);
}

/** 获取随心推兴趣标签  [GET /open_api/v1.0/qianchuan/aweme/interest_action/interest/keyword/] */
export function qianchuan_aweme_interest_action_interest_keyword(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/interest_action/interest/keyword/', 'GET', advertiserId, params, token);
}

/** 获取随心推可投视频列表  [GET /open_api/v1.0/qianchuan/aweme/video/get/] */
export function qianchuan_aweme_video_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/video/get/', 'GET', advertiserId, params, token);
}

/** 获取随心推投放效果预估  [POST /open_api/v1.0/qianchuan/aweme/estimate_profit/] */
export function qianchuan_aweme_estimate_profit(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/estimate_profit/', 'POST', advertiserId, params, token);
}

/** 获取随心推短视频建议出价  [GET /open_api/v1.0/qianchuan/aweme/suggest_bid/] */
export function qianchuan_aweme_suggest_bid(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/suggest_bid/', 'GET', advertiserId, params, token);
}

/** 获取随心推ROI建议出价  [GET /open_api/v1.0/qianchuan/aweme/suggest/roi/goal/] */
export function qianchuan_aweme_suggest_roi_goal(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/suggest/roi/goal/', 'GET', advertiserId, params, token);
}

/** 查询随心推使用中订单配额信息  [GET /open_api/v1.0/qianchuan/aweme/order/quota/get/] */
export function qianchuan_aweme_order_quota_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/order/quota/get/', 'GET', advertiserId, params, token);
}

/** 追加随心推订单预算  [POST /open_api/v1.0/qianchuan/aweme/order/budget/add/] */
export function qianchuan_aweme_order_budget_add(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/order/budget/add/', 'POST', advertiserId, params, token);
}

/** 获取建议延长时长  [GET /open_api/v1.0/qianchuan/aweme/order/suggest/delivery_time/get/] */
export function qianchuan_aweme_order_suggest_delivery_time_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/aweme/order/suggest/delivery_time/get/', 'GET', advertiserId, params, token);
}

/** 上传图片素材  [GET /open_api/2/file/image/ad/] */
export function file_image_ad(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/image/ad/', 'GET', advertiserId, params, token);
}

/** 上传视频素材  [GET /open_api/2/file/video/ad/] */
export function file_video_ad(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/ad/', 'GET', advertiserId, params, token);
}

/** 上传图文素材  [POST /open_api/2/carousel/create/] */
export function carousel_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/carousel/create/', 'POST', advertiserId, params, token);
}

/** 上传图文内的音频素材  [GET /open_api/2/file/audio/ad/] */
export function file_audio_ad(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/audio/ad/', 'GET', advertiserId, params, token);
}

/** 异步上传视频文件  [POST /open_api/2/file/upload_task/create/] */
export function file_upload_task_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/upload_task/create/', 'POST', advertiserId, params, token);
}

/** 获取异步上传视频文件结果  [GET /open_api/2/file/video/upload_task/list/] */
export function file_video_upload_task_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/upload_task/list/', 'GET', advertiserId, params, token);
}

/** 批量删除图片素材  [POST /open_api/v1.0/qianchuan/file/image/delete/] */
export function qianchuan_file_image_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/file/image/delete/', 'POST', advertiserId, params, token);
}

/** 批量删除视频素材  [POST /open_api/v1.0/qianchuan/file/video/delete/] */
export function qianchuan_file_video_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/file/video/delete/', 'POST', advertiserId, params, token);
}

/** 获取千川素材库图片  [GET /open_api/v1.0/qianchuan/image/get/] */
export function qianchuan_image_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/image/get/', 'GET', advertiserId, params, token);
}

/** 获取千川素材库视频  [GET /open_api/v1.0/qianchuan/video/get/] */
export function qianchuan_video_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/video/get/', 'GET', advertiserId, params, token);
}

/** 获取抖音号下的视频  [GET /open_api/v1.0/qianchuan/file/video/aweme/get/] */
export function qianchuan_file_video_aweme_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/file/video/aweme/get/', 'GET', advertiserId, params, token);
}

/** 获取抖音主页视频对应素材库视频  [GET /open_api/v1.0/qianchuan/video/by_aweme/get/] */
export function qianchuan_video_by_aweme_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/video/by_aweme/get/', 'GET', advertiserId, params, token);
}

/** 获取千川素材库图文  [GET /open_api/v1.0/qianchuan/carousel/get/] */
export function qianchuan_carousel_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/carousel/get/', 'GET', advertiserId, params, token);
}

/** 获取抖音号下的图文  [GET /open_api/v1.0/qianchuan/carousel/aweme/get/] */
export function qianchuan_carousel_aweme_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/carousel/aweme/get/', 'GET', advertiserId, params, token);
}

/** 获取首发素材  [GET /open_api/v1.0/qianchuan/file/video/original/get/] */
export function qianchuan_file_video_original_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/file/video/original/get/', 'GET', advertiserId, params, token);
}

/** 获取低效素材  [GET /open_api/v1.0/qianchuan/file/video/efficiency/get/] */
export function qianchuan_file_video_efficiency_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/file/video/efficiency/get/', 'GET', advertiserId, params, token);
}

/** 代理商获取视频素材  [GET /open_api/2/file/video/agent/get/] */
export function file_video_agent_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/agent/get/', 'GET', advertiserId, params, token);
}

/** 投放素材预审提交接口（连山云视频点播版）  [POST /open_api/v3.0/open_material_audit/pro/submit/] */
export function open_material_audit_pro_submit(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/open_material_audit/pro/submit/', 'POST', advertiserId, params, token);
}

/** 投放素材预审结果查询（连山云视频点播版）  [GET /open_api/v3.0/open_material_audit/pro/get/] */
export function open_material_audit_pro_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/open_material_audit/pro/get/', 'GET', advertiserId, params, token);
}

/** 创建直播-一键控量计划  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/create/] */
export function qianchuan_uni_promotion_ad_control_task_smart_control_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/create/', 'POST', advertiserId, params, token);
}

/** 修改直播-一键控量计划调控状态  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/status/update/] */
export function qianchuan_uni_promotion_ad_control_task_smart_control_status_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/smart_control/status/update/', 'POST', advertiserId, params, token);
}

/** 创建调控任务  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/create/] */
export function qianchuan_uni_promotion_ad_control_task_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/create/', 'POST', advertiserId, params, token);
}

/** 修改调控任务设置  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/update/] */
export function qianchuan_uni_promotion_ad_control_task_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/update/', 'POST', advertiserId, params, token);
}

/** 修改任务调控状态  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/status/update/] */
export function qianchuan_uni_promotion_ad_control_task_status_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/status/update/', 'POST', advertiserId, params, token);
}

/** 获取调控任务列表  [GET /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/list/] */
export function qianchuan_uni_promotion_ad_control_task_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/list/', 'GET', advertiserId, params, token);
}

/** 修改调控任务预算  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/budget/update/] */
export function qianchuan_uni_promotion_ad_control_task_budget_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/budget/update/', 'POST', advertiserId, params, token);
}

/** 修改调控任务投放时长  [POST /open_api/v1.0/qianchuan/uni_promotion/ad/control_task/duration/update/] */
export function qianchuan_uni_promotion_ad_control_task_duration_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/uni_promotion/ad/control_task/duration/update/', 'POST', advertiserId, params, token);
}

/** 获取行业列表  [GET /open_api/2/tools/industry/get/] */
export function tools_industry_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/industry/get/', 'GET', advertiserId, params, token);
}

/** 获取千川操作日志  [POST /open_api/v1.0/qianchuan/tools/log_search/] */
export function qianchuan_tools_log_search(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/tools/log_search/', 'POST', advertiserId, params, token);
}

/** 获取定向受众预估  [POST /open_api/v1.0/qianchuan/tools/estimate_audience/] */
export function qianchuan_tools_estimate_audience(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/tools/estimate_audience/', 'POST', advertiserId, params, token);
}

/** 获取在投计划配额信息  [GET /open_api/v1.0/qianchuan/ad/quota/get/] */
export function qianchuan_ad_quota_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/ad/quota/get/', 'GET', advertiserId, params, token);
}

/** 获取白名单能力  [POST /open_api/v1.0/qianchuan/tools/gray/] */
export function qianchuan_tools_gray(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/tools/gray/', 'POST', advertiserId, params, token);
}

/** 智能优惠券白名单  [POST /open_api/v1.0/qianchuan/tools/allow_coupon/] */
export function qianchuan_tools_allow_coupon(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/tools/allow_coupon/', 'POST', advertiserId, params, token);
}

/** 查询违规积分明细  [GET /open_api/v3.0/security/score_violation_event/get/] */
export function security_score_violation_event_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/security/score_violation_event/get/', 'GET', advertiserId, params, token);
}

/** 查询账户累计积分  [GET /open_api/v3.0/security/score_total/get/] */
export function security_score_total_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/security/score_total/get/', 'GET', advertiserId, params, token);
}

/** 查看积分处置详情  [GET /open_api/v3.0/security/score_disposal_info/get/] */
export function security_score_disposal_info_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/security/score_disposal_info/get/', 'GET', advertiserId, params, token);
}

/** 查询抖音类目下的推荐达人  [GET /open_api/2/tools/aweme_category_top_author/get/] */
export function tools_aweme_category_top_author_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/aweme_category_top_author/get/', 'GET', advertiserId, params, token);
}

/** 查询抖音类目列表  [GET /open_api/2/tools/aweme_multi_level_category/get/] */
export function tools_aweme_multi_level_category_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/aweme_multi_level_category/get/', 'GET', advertiserId, params, token);
}

/** 查询抖音类似帐号  [POST /open_api/2/tools/aweme_similar_author_search/] */
export function tools_aweme_similar_author_search(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/aweme_similar_author_search/', 'POST', advertiserId, params, token);
}

/** 查询抖音帐号和类目信息  [POST /open_api/2/tools/aweme_info_search/] */
export function tools_aweme_info_search(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/aweme_info_search/', 'POST', advertiserId, params, token);
}

/** 查询抖音号id对应的达人信息  [GET /open_api/2/tools/aweme_author_info/get/] */
export function tools_aweme_author_info_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/aweme_author_info/get/', 'GET', advertiserId, params, token);
}

/** 行为类目查询  [POST /open_api/2/tools/interest_action/action/category/] */
export function tools_interest_action_action_category(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/interest_action/action/category/', 'POST', advertiserId, params, token);
}

/** 行为关键词查询  [GET /open_api/2/tools/interest_action/action/keyword/] */
export function tools_interest_action_action_keyword(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/interest_action/action/keyword/', 'GET', advertiserId, params, token);
}

/** 兴趣类目查询  [POST /open_api/2/tools/interest_action/interest/category/] */
export function tools_interest_action_interest_category(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/interest_action/interest/category/', 'POST', advertiserId, params, token);
}

/** 兴趣关键词查询  [GET /open_api/2/tools/interest_action/interest/keyword/] */
export function tools_interest_action_interest_keyword(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/interest_action/interest/keyword/', 'GET', advertiserId, params, token);
}

/** 兴趣行为类目关键词id转词  [POST /open_api/2/tools/interest_action/id2word/] */
export function tools_interest_action_id2word(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/interest_action/id2word/', 'POST', advertiserId, params, token);
}

/** 获取行为兴趣推荐关键词  [POST /open_api/2/tools/interest_action/keyword/suggest/] */
export function tools_interest_action_keyword_suggest(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/interest_action/keyword/suggest/', 'POST', advertiserId, params, token);
}

/** 查询动态创意词包  [GET /open_api/2/tools/creative_word/select/] */
export function tools_creative_word_select(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/creative_word/select/', 'GET', advertiserId, params, token);
}

/** 查询创编可用人群  [GET /open_api/v1.0/qianchuan/dmp/audiences/get/] */
export function qianchuan_dmp_audiences_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/dmp/audiences/get/', 'GET', advertiserId, params, token);
}

/** 获取定向包列表  [GET /open_api/v1.0/qianchuan/orientation_package/get/] */
export function qianchuan_orientation_package_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/orientation_package/get/', 'GET', advertiserId, params, token);
}

/** 获取人群管理列表  [GET /open_api/v1.0/qianchuan/audience_list/get/] */
export function qianchuan_audience_list_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/audience_list/get/', 'GET', advertiserId, params, token);
}

/** 获取人群分组  [GET /open_api/v1.0/qianchuan/audience_group/get/] */
export function qianchuan_audience_group_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/audience_group/get/', 'GET', advertiserId, params, token);
}

/** 上传人群  [POST /open_api/v1.0/qianchuan/audience/create_by_file/] */
export function qianchuan_audience_create_by_file(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/audience/create_by_file/', 'POST', advertiserId, params, token);
}

/** 推送人群  [POST /open_api/v1.0/qianchuan/audience/push/] */
export function qianchuan_audience_push(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/audience/push/', 'POST', advertiserId, params, token);
}

/** 删除人群  [POST /open_api/v1.0/qianchuan/audience/delete/] */
export function qianchuan_audience_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/audience/delete/', 'POST', advertiserId, params, token);
}

/** 小文件直接上传  [POST /open_api/v1.0/qianchuan/audience_file/upload/] */
export function qianchuan_audience_file_upload(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/audience_file/upload/', 'POST', advertiserId, params, token);
}

/** 大文件分片上传  [POST /open_api/v1.0/qianchuan/audience_file/part_upload/] */
export function qianchuan_audience_file_part_upload(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/audience_file/part_upload/', 'POST', advertiserId, params, token);
}

/** 设置计划一键起量任务  [POST /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/set/] */
export function qianchuan_tools_smart_boost_ad_boost_set(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/set/', 'POST', advertiserId, params, token);
}

/** 获取计划一键起量状态  [GET /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/status/get/] */
export function qianchuan_tools_smart_boost_ad_boost_status_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/status/get/', 'GET', advertiserId, params, token);
}

/** 获取计划一键起量版本  [GET /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/version/get/] */
export function qianchuan_tools_smart_boost_ad_boost_version_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/version/get/', 'GET', advertiserId, params, token);
}

/** 获取计划一键起量报告  [GET /open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/report/get/] */
export function qianchuan_tools_smart_boost_ad_boost_report_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v1.0/qianchuan/tools/smart_boost/ad_boost/report/get/', 'GET', advertiserId, params, token);
}

/** 获取评论列表  [GET /open_api/v3.0/tools/comment/get/] */
export function tools_comment_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/comment/get/', 'GET', advertiserId, params, token);
}

/** 获取评论回复  [GET /open_api/v3.0/tools/comment_reply/get/] */
export function tools_comment_reply_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/comment_reply/get/', 'GET', advertiserId, params, token);
}

/** 获取评论统计指标  [GET /open_api/v3.0/tools/comment_metrics/get/] */
export function tools_comment_metrics_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/comment_metrics/get/', 'GET', advertiserId, params, token);
}

/** 回复评论  [POST /open_api/v3.0/tools/comment/reply/] */
export function tools_comment_reply(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/comment/reply/', 'POST', advertiserId, params, token);
}

/** 隐藏评论  [POST /open_api/v3.0/tools/comment/hide/] */
export function tools_comment_hide(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/comment/hide/', 'POST', advertiserId, params, token);
}

/** 获取评论视频ID列表  [POST /open_api/v3.0/tools/comment/mid2item_id/] */
export function tools_comment_mid2item_id(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/comment/mid2item_id/', 'POST', advertiserId, params, token);
}

/** 批量添加屏蔽词  [POST /open_api/v3.0/tools/comment/terms_banned/add/] */
export function tools_comment_terms_banned_add(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/comment/terms_banned/add/', 'POST', advertiserId, params, token);
}

/** 批量删除屏蔽词  [POST /open_api/v3.0/tools/comment/terms_banned/delete/] */
export function tools_comment_terms_banned_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/comment/terms_banned/delete/', 'POST', advertiserId, params, token);
}

/** 更新屏蔽词  [POST /open_api/v3.0/tools/comment/terms_banned/update/] */
export function tools_comment_terms_banned_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/comment/terms_banned/update/', 'POST', advertiserId, params, token);
}

/** 获取屏蔽词  [GET /open_api/v3.0/tools/comment/terms_banned/get/] */
export function tools_comment_terms_banned_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/comment/terms_banned/get/', 'GET', advertiserId, params, token);
}

/** 添加屏蔽用户  [POST /open_api/v3.0/tools/aweme_banned/create/] */
export function tools_aweme_banned_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/aweme_banned/create/', 'POST', advertiserId, params, token);
}

/** 删除屏蔽用户  [POST /open_api/v3.0/tools/aweme_banned/delete/] */
export function tools_aweme_banned_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/aweme_banned/delete/', 'POST', advertiserId, params, token);
}

/** 获取屏蔽用户列表  [GET /open_api/v3.0/tools/aweme_banned/list/] */
export function tools_aweme_banned_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/aweme_banned/list/', 'GET', advertiserId, params, token);
}

/** 查询国家/区域信息  [GET /open_api/2/tools/country/info/] */
export function tools_country_info(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/country/info/', 'GET', advertiserId, params, token);
}

/** 获取行政信息  [GET /open_api/2/tools/admin/info/] */
export function tools_admin_info(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/admin/info/', 'GET', advertiserId, params, token);
}

/** 获取APP Access Token  [POST /open_api/oauth2/app_access_token/] */
export function oauth2_app_access_token(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/oauth2/app_access_token/', 'POST', advertiserId, params, token);
}

/** 获取投放账户头像ID  [POST /open_api/2/advertiser/avatar/upload/] */
export function advertiser_avatar_upload(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/avatar/upload/', 'POST', advertiserId, params, token);
}

/** 更新投放账户头像  [POST /open_api/2/advertiser/avatar/submit/] */
export function advertiser_avatar_submit(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/avatar/submit/', 'POST', advertiserId, params, token);
}

/** 查询投放账户头像  [GET /open_api/2/advertiser/avatar/get/] */
export function advertiser_avatar_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/avatar/get/', 'GET', advertiserId, params, token);
}

/** 上传资质图片  [POST /open_api/2/file/image/advertiser/] */
export function file_image_advertiser(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/image/advertiser/', 'POST', advertiserId, params, token);
}

/** 获取主体资质（新版）  [GET /open_api/v3.0/advertiser/qualification/get/] */
export function advertiser_qualification_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/advertiser/qualification/get/', 'GET', advertiserId, params, token);
}

/** 上传主体资质（新版）  [POST /open_api/v3.0/advertiser/qualification/submit/] */
export function advertiser_qualification_submit(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/advertiser/qualification/submit/', 'POST', advertiserId, params, token);
}

/** 获取投放资质（旧版）  [POST /open_api/2/advertiser/qualification/select_v2/] */
export function advertiser_qualification_select_v2(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/qualification/select_v2/', 'POST', advertiserId, params, token);
}

/** 获取投放资质（新版）  [GET /open_api/v3.0/advertiser/delivery_qualification/list/] */
export function advertiser_delivery_qualification_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/advertiser/delivery_qualification/list/', 'GET', advertiserId, params, token);
}

/** 上传投放资质（旧版）  [POST /open_api/2/advertiser/qualification/create_v2/] */
export function advertiser_qualification_create_v2(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/qualification/create_v2/', 'POST', advertiserId, params, token);
}

/** 上传/更新投放资质（新版）  [POST /open_api/v3.0/advertiser/delivery_qualification/submit/] */
export function advertiser_delivery_qualification_submit(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/advertiser/delivery_qualification/submit/', 'POST', advertiserId, params, token);
}

/** 批量删除投放资质  [POST /open_api/v3.0/advertiser/delivery_qualification/delete/] */
export function advertiser_delivery_qualification_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/advertiser/delivery_qualification/delete/', 'POST', advertiserId, params, token);
}

/** 获取营销产品资质规则配置  [POST /open_api/v3.0/advertiser/delivery_pkg_config/] */
export function advertiser_delivery_pkg_config(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/advertiser/delivery_pkg_config/', 'POST', advertiserId, params, token);
}

/** 获取营销产品资质  [GET /open_api/v3.0/advertiser/delivery_pkg/get/] */
export function advertiser_delivery_pkg_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/advertiser/delivery_pkg/get/', 'GET', advertiserId, params, token);
}

/** 上传/更新营销产品资质  [POST /open_api/v3.0/advertiser/delivery_pkg/submit/] */
export function advertiser_delivery_pkg_submit(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/advertiser/delivery_pkg/submit/', 'POST', advertiserId, params, token);
}

/** 批量删除营销产品资质  [POST /open_api/v3.0/advertiser/delivery_pkg/delete/] */
export function advertiser_delivery_pkg_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/advertiser/delivery_pkg/delete/', 'POST', advertiserId, params, token);
}

/** 二级代理商列表  [GET /open_api/2/agent/child_agent/select/] */
export function agent_child_agent_select(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/child_agent/select/', 'GET', advertiserId, params, token);
}

/** 更新客户信息  [POST /open_api/2/agent/advertiser/update/] */
export function agent_advertiser_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/advertiser/update/', 'POST', advertiserId, params, token);
}

/** 更新广告主所属销售  [POST /open_api/2/agent/adv/advertiser/update_sale/] */
export function agent_adv_advertiser_update_sale(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/adv/advertiser/update_sale/', 'POST', advertiserId, params, token);
}

/** 投放账户复制  [POST /open_api/2/agent/advertiser/copy/] */
export function agent_advertiser_copy(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/advertiser/copy/', 'POST', advertiserId, params, token);
}

/** 获取组织认证及授权主体列表  [GET /open_api/v3.0/tools/ebp/subject/list/] */
export function tools_ebp_subject_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/subject/list/', 'GET', advertiserId, params, token);
}

/** 添加资产共享  [POST /open_api/v3.0/tools/ebp/asset/auth/] */
export function tools_ebp_asset_auth(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/asset/auth/', 'POST', advertiserId, params, token);
}

/** 查询资产共享范围  [GET /open_api/v3.0/tools/ebp/asset/auth/list/] */
export function tools_ebp_asset_auth_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/asset/auth/list/', 'GET', advertiserId, params, token);
}

/** 取消资产共享  [POST /open_api/v3.0/tools/ebp/asset/auth/cancel/] */
export function tools_ebp_asset_auth_cancel(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/asset/auth/cancel/', 'POST', advertiserId, params, token);
}

/** 获取工作台组织关系（升级版）  [GET /open_api/2/ebp/level/get/] */
export function ebp_level_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/ebp/level/get/', 'GET', advertiserId, params, token);
}

/** 创建获取升级版巨量引擎工作台账户任务  [POST /open_api/2/ebp/advertiser/task/create/] */
export function ebp_advertiser_task_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/ebp/advertiser/task/create/', 'POST', advertiserId, params, token);
}

/** 查询获取工作台组织账户任务状态  [GET /open_api/2/ebp/advertiser/task/list/] */
export function ebp_advertiser_task_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/ebp/advertiser/task/list/', 'GET', advertiserId, params, token);
}

/** 下载获取升级版巨量引擎工作台账户任务结果  [POST /open_api/2/ebp/advertiser/task/download/] */
export function ebp_advertiser_task_download(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/ebp/advertiser/task/download/', 'POST', advertiserId, params, token);
}

/** 获取旧版巨量引擎工作台下账户列表  [GET /open_api/2/majordomo/advertiser/select/] */
export function majordomo_advertiser_select(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/majordomo/advertiser/select/', 'GET', advertiserId, params, token);
}

/** 获取旧版巨量引擎工作台下主体信息  [GET /open_api/v3.0/business_platform/company_info/get/] */
export function business_platform_company_info_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/business_platform/company_info/get/', 'GET', advertiserId, params, token);
}

/** 获取主体下的账户列表  [GET /open_api/v3.0/business_platform/company_account/get/] */
export function business_platform_company_account_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/business_platform/company_account/get/', 'GET', advertiserId, params, token);
}

/** 投放账户充值校验  [GET /open_api/v3.0/charge/verify/get/] */
export function charge_verify_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/charge/verify/get/', 'GET', advertiserId, params, token);
}

/** 投放账户对公充值  [POST /open_api/v3.0/prepay_charge/generate_fix_remiattance_code/create/] */
export function prepay_charge_generate_fix_remiattance_code_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/prepay_charge/generate_fix_remiattance_code/create/', 'POST', advertiserId, params, token);
}

/** 投放账户查询汇款码列表  [GET /open_api/v3.0/fix_remittance_code/list/get/] */
export function fix_remittance_code_list_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/fix_remittance_code/list/get/', 'GET', advertiserId, params, token);
}

/** 钱包查询汇款码列表  [GET /open_api/v3.0/wallet/remittance_code/list/get/] */
export function wallet_remittance_code_list_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/wallet/remittance_code/list/get/', 'GET', advertiserId, params, token);
}

/** 钱包对公充值  [POST /open_api/v3.0/wallet/prepay_charge/generate_remittance_code/create/] */
export function wallet_prepay_charge_generate_remittance_code_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/wallet/prepay_charge/generate_remittance_code/create/', 'POST', advertiserId, params, token);
}

/** 钱包充值校验  [GET /open_api/v3.0/wallet/charge/verify/get/] */
export function wallet_charge_verify_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/wallet/charge/verify/get/', 'GET', advertiserId, params, token);
}

/** 查询账号余额  [GET /open_api/2/advertiser/fund/get/] */
export function advertiser_fund_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/fund/get/', 'GET', advertiserId, params, token);
}

/** 查询账户日流水  [POST /open_api/2/advertiser/fund/daily_stat/] */
export function advertiser_fund_daily_stat(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/fund/daily_stat/', 'POST', advertiserId, params, token);
}

/** 查询代理商转账记录  [POST /open_api/2/agent/transfer/transaction_record/] */
export function agent_transfer_transaction_record(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/transfer/transaction_record/', 'POST', advertiserId, params, token);
}

/** 获取返货共享钱包余额  [GET /open_api/2/fund/shared_wallet_balance/get/] */
export function fund_shared_wallet_balance_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/fund/shared_wallet_balance/get/', 'GET', advertiserId, params, token);
}

/** 查询项目关联结算单信息  [POST /open_api/2/query/statement/] */
export function query_statement(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/query/statement/', 'POST', advertiserId, params, token);
}

/** 查询项目信息  [POST /open_api/2/query/project/] */
export function query_project(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/query/project/', 'POST', advertiserId, params, token);
}

/** 资金共享-批量查询钱包余额  [GET /open_api/v3.0/shared_wallet/wallet_balance/get/] */
export function shared_wallet_wallet_balance_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/wallet_balance/get/', 'GET', advertiserId, params, token);
}

/** 资金共享-查询共享钱包流水明细  [GET /open_api/v3.0/shared_wallet/transaction_detail/get/] */
export function shared_wallet_transaction_detail_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/transaction_detail/get/', 'GET', advertiserId, params, token);
}

/** 资金共享-查询共享钱包日流水  [GET /open_api/v3.0/shared_wallet/daily_stat/get/] */
export function shared_wallet_daily_stat_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/daily_stat/get/', 'GET', advertiserId, params, token);
}

/** 资金共享-共享钱包信息查询  [GET /open_api/v3.0/shared_wallet/main_wallet/get/] */
export function shared_wallet_main_wallet_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/main_wallet/get/', 'GET', advertiserId, params, token);
}

/** 资金共享-批量查询钱包信息  [GET /open_api/v3.0/shared_wallet/wallet_info/get/] */
export function shared_wallet_wallet_info_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/wallet_info/get/', 'GET', advertiserId, params, token);
}

/** 资金共享-查询子钱包下绑定的adv列表  [GET /open_api/v3.0/shared_wallet/wallet_relation/get/] */
export function shared_wallet_wallet_relation_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/wallet_relation/get/', 'GET', advertiserId, params, token);
}

/** 共享钱包-查询账户对应公司下的钱包关系  [GET /open_api/v3.0/shared_wallet/account_relation/get/] */
export function shared_wallet_account_relation_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/account_relation/get/', 'GET', advertiserId, params, token);
}

/** 资金共享-最大可转余额查询  [POST /open_api/v3.0/cg_transfer/wallet/transfer/can_transfer_balance/] */
export function cg_transfer_wallet_transfer_can_transfer_balance(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/wallet/transfer/can_transfer_balance/', 'POST', advertiserId, params, token);
}

/** 资金共享-发起转账  [POST /open_api/v3.0/cg_transfer/wallet/transfer/create/] */
export function cg_transfer_wallet_transfer_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/wallet/transfer/create/', 'POST', advertiserId, params, token);
}

/** 资金共享-查询转账列表  [GET /open_api/v3.0/cg_transfer/wallet/transfer/list/] */
export function cg_transfer_wallet_transfer_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/wallet/transfer/list/', 'GET', advertiserId, params, token);
}

/** 资金共享-查询转账单信息  [GET /open_api/v3.0/cg_transfer/wallet/transfer/detail/] */
export function cg_transfer_wallet_transfer_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cg_transfer/wallet/transfer/detail/', 'GET', advertiserId, params, token);
}

/** 资金共享-设置子钱包预算  [POST /open_api/v3.0/shared_wallet/budget/submit/] */
export function shared_wallet_budget_submit(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/budget/submit/', 'POST', advertiserId, params, token);
}

/** 资金共享-查询子钱包预算  [GET /open_api/v3.0/shared_wallet/budget/get/] */
export function shared_wallet_budget_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/budget/get/', 'GET', advertiserId, params, token);
}

/** 资金共享-设置子钱包盯盘规则  [POST /open_api/v3.0/shared_wallet/watch_rule/submit/] */
export function shared_wallet_watch_rule_submit(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/watch_rule/submit/', 'POST', advertiserId, params, token);
}

/** 资金共享-查询子钱包盯盘规则  [GET /open_api/v3.0/shared_wallet/watch_rule/get/] */
export function shared_wallet_watch_rule_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/shared_wallet/watch_rule/get/', 'GET', advertiserId, params, token);
}

/** 返点-查询返点核算流水  [POST /open_api/2/query/rebate_accounting_info/] */
export function query_rebate_accounting_info(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/query/rebate_accounting_info/', 'POST', advertiserId, params, token);
}

/** 返点-查询返点流水  [POST /open_api/2/query/rebate_balance/] */
export function query_rebate_balance(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/query/rebate_balance/', 'POST', advertiserId, params, token);
}

/** 排期—查询业务实体ID  [GET /open_api/2/query/booking/business_entity_id/get/] */
export function query_booking_business_entity_id_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/query/booking/business_entity_id/get/', 'GET', advertiserId, params, token);
}

/** 开票-新建开票申请单（代理商版）  [POST /open_api/2/create/statement_invoice/] */
export function create_statement_invoice(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/create/statement_invoice/', 'POST', advertiserId, params, token);
}

/** 开票-查询开票单数据（代理商版）  [POST /open_api/2/query/invoice/] */
export function query_invoice(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/query/invoice/', 'POST', advertiserId, params, token);
}

/** 开票-获取电子发票文件接口（代理商版）  [POST /open_api/2/query/invoice_electronic_url/] */
export function query_invoice_electronic_url(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/query/invoice_electronic_url/', 'POST', advertiserId, params, token);
}

/** 获取账户日预算  [GET /open_api/2/advertiser/budget/get/] */
export function advertiser_budget_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/budget/get/', 'GET', advertiserId, params, token);
}

/** 更新账户日预算  [GET /open_api/2/advertiser/update/budget/] */
export function advertiser_update_budget(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/advertiser/update/budget/', 'GET', advertiserId, params, token);
}

/** 创建项目  [POST /open_api/v3.0/project/create/] */
export function project_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/create/', 'POST', advertiserId, params, token);
}

/** 更新项目  [POST /open_api/v3.0/project/update/] */
export function project_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/update/', 'POST', advertiserId, params, token);
}

/** 获取项目列表  [GET /open_api/v3.0/project/list/] */
export function project_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/list/', 'GET', advertiserId, params, token);
}

/** 批量更新项目状态  [POST /open_api/v3.0/project/status/update/] */
export function project_status_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/status/update/', 'POST', advertiserId, params, token);
}

/** 批量删除项目  [POST /open_api/v3.0/project/delete/] */
export function project_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/delete/', 'POST', advertiserId, params, token);
}

/** 批量获取项目成本保障状态  [GET /open_api/v3.0/project/cost_protect_status/get/] */
export function project_cost_protect_status_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/cost_protect_status/get/', 'GET', advertiserId, params, token);
}

/** 批量更新项目预算  [POST /open_api/v3.0/project/budget/update/] */
export function project_budget_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/budget/update/', 'POST', advertiserId, params, token);
}

/** 批量更新项目投放时间  [POST /open_api/v3.0/project/schedule_time/update/] */
export function project_schedule_time_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/schedule_time/update/', 'POST', advertiserId, params, token);
}

/** 批量更新项目投放时段  [POST /open_api/v3.0/project/week_schedule/update/] */
export function project_week_schedule_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/week_schedule/update/', 'POST', advertiserId, params, token);
}

/** 批量修改项目ROI系数  [POST /open_api/v3.0/project/roigoal/update/] */
export function project_roigoal_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/roigoal/update/', 'POST', advertiserId, params, token);
}

/** 创建预算组  [POST /open_api/v3.0/budget_group/create/] */
export function budget_group_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/budget_group/create/', 'POST', advertiserId, params, token);
}

/** 更新预算组  [POST /open_api/v3.0/budget_group/update/] */
export function budget_group_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/budget_group/update/', 'POST', advertiserId, params, token);
}

/** 批量删除预算组  [POST /open_api/v3.0/budget_group/delete/] */
export function budget_group_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/budget_group/delete/', 'POST', advertiserId, params, token);
}

/** 获取预算组列表  [GET /open_api/v3.0/budget_group/list/] */
export function budget_group_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/budget_group/list/', 'GET', advertiserId, params, token);
}

/** 批量更新项目出价  [POST /open_api/v3.0/project/cpa_bid/update/] */
export function project_cpa_bid_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/cpa_bid/update/', 'POST', advertiserId, params, token);
}

/** 批量更新深层项目出价  [POST /open_api/v3.0/project/deep_cpa_bid/update/] */
export function project_deep_cpa_bid_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/project/deep_cpa_bid/update/', 'POST', advertiserId, params, token);
}

/** 创建单元  [POST /open_api/v3.0/promotion/create/] */
export function promotion_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/create/', 'POST', advertiserId, params, token);
}

/** 修改单元  [POST /open_api/v3.0/promotion/update/] */
export function promotion_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/update/', 'POST', advertiserId, params, token);
}

/** 获取单元列表  [GET /open_api/v3.0/promotion/list/] */
export function promotion_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/list/', 'GET', advertiserId, params, token);
}

/** 批量更新营销预算  [POST /open_api/v3.0/promotion/budget/update/] */
export function promotion_budget_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/budget/update/', 'POST', advertiserId, params, token);
}

/** 批量更新营销出价  [POST /open_api/v3.0/promotion/bid/update/] */
export function promotion_bid_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/bid/update/', 'POST', advertiserId, params, token);
}

/** 批量修改深度出价  [POST /open_api/v3.0/promotion/deepbid/update/] */
export function promotion_deepbid_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/deepbid/update/', 'POST', advertiserId, params, token);
}

/** 批量更新营销启用状态  [POST /open_api/v3.0/promotion/status/update/] */
export function promotion_status_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/status/update/', 'POST', advertiserId, params, token);
}

/** 批量删除营销  [POST /open_api/v3.0/promotion/delete/] */
export function promotion_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/delete/', 'POST', advertiserId, params, token);
}

/** 批量获取广告审核建议  [GET /open_api/v3.0/promotion/reject_reason/get/] */
export function promotion_reject_reason_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/reject_reason/get/', 'GET', advertiserId, params, token);
}

/** 批量更新营销素材启用状态  [POST /open_api/v3.0/material/status/update/] */
export function material_status_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/material/status/update/', 'POST', advertiserId, params, token);
}

/** 批量获取营销成本保障状态  [GET /open_api/v3.0/promotion/cost_protect_status/get/] */
export function promotion_cost_protect_status_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/cost_protect_status/get/', 'GET', advertiserId, params, token);
}

/** 获取关联云图的投放账户信息  [GET /open_api/v3.0/cdp/brand/get/] */
export function cdp_brand_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/cdp/brand/get/', 'GET', advertiserId, params, token);
}

/** 批量更新营销投放时段  [POST /open_api/v3.0/promotion/schedule_time/update/] */
export function promotion_schedule_time_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/schedule_time/update/', 'POST', advertiserId, params, token);
}

/** 删除营销下素材  [POST /open_api/v3.0/promotion/material/delete/] */
export function promotion_material_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/promotion/material/delete/', 'POST', advertiserId, params, token);
}

/** 获取蓝海流量包  [GET /open_api/v3.0/tools/blue_flow_package/list/] */
export function tools_blue_flow_package_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/blue_flow_package/list/', 'GET', advertiserId, params, token);
}

/** 获取项目下可用蓝海关键词  [GET /open_api/v3.0/tools/blue_flow_keyword/list/] */
export function tools_blue_flow_keyword_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/blue_flow_keyword/list/', 'GET', advertiserId, params, token);
}

/** 获取推荐关键词  [POST /open_api/v3.0/sugg_words/] */
export function sugg_words(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/sugg_words/', 'POST', advertiserId, params, token);
}

/** 批量添加项目否定词  [POST /open_api/v3.0/tools/privative_word/project/add/] */
export function tools_privative_word_project_add(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/privative_word/project/add/', 'POST', advertiserId, params, token);
}

/** 批量更新项目否定词  [POST /open_api/v3.0/tools/privative_word/project/update/] */
export function tools_privative_word_project_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/privative_word/project/update/', 'POST', advertiserId, params, token);
}

/** 批量获取项目否定词  [POST /open_api/v3.0/tools/privative_word/batch_get/] */
export function tools_privative_word_batch_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/privative_word/batch_get/', 'POST', advertiserId, params, token);
}

/** 批量新增营销否定词  [POST /open_api/v3.0/tools/privative_word/promotion/add/] */
export function tools_privative_word_promotion_add(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/privative_word/promotion/add/', 'POST', advertiserId, params, token);
}

/** 批量更新营销否定词  [POST /open_api/v3.0/tools/privative_word/promotion/update/] */
export function tools_privative_word_promotion_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/privative_word/promotion/update/', 'POST', advertiserId, params, token);
}

/** 设置优词提量系数和生效维度  [POST /open_api/v3.0/tools/keywords_bid_ratio/create/] */
export function tools_keywords_bid_ratio_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/keywords_bid_ratio/create/', 'POST', advertiserId, params, token);
}

/** 更新优词提量系数和生效维度  [POST /open_api/v3.0/tools/keywords_bid_ratio/update/] */
export function tools_keywords_bid_ratio_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/keywords_bid_ratio/update/', 'POST', advertiserId, params, token);
}

/** 删除优词计划  [POST /open_api/v3.0/tools/keywords_bid_ratio/delete/] */
export function tools_keywords_bid_ratio_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/keywords_bid_ratio/delete/', 'POST', advertiserId, params, token);
}

/** 查询优词提量系数信息  [GET /open_api/v3.0/tools/keywords_bid_ratio/get/] */
export function tools_keywords_bid_ratio_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/keywords_bid_ratio/get/', 'GET', advertiserId, params, token);
}

/** 查询优词绑定的项目信息  [GET /open_api/v3.0/tools/keywords_project_info/get/] */
export function tools_keywords_project_info_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/keywords_project_info/get/', 'GET', advertiserId, params, token);
}

/** 创建关键词  [POST /open_api/v3.0/keyword/create/] */
export function keyword_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/keyword/create/', 'POST', advertiserId, params, token);
}

/** 更新关键词属性  [POST /open_api/v3.0/keyword/update/] */
export function keyword_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/keyword/update/', 'POST', advertiserId, params, token);
}

/** 删除关键词  [POST /open_api/v3.0/keyword/delete/] */
export function keyword_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/keyword/delete/', 'POST', advertiserId, params, token);
}

/** 获取关键词列表  [GET /open_api/v3.0/keyword/list/] */
export function keyword_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/keyword/list/', 'GET', advertiserId, params, token);
}

/** 查询订单列表  [GET /open_api/v3.0/douplus/order/list/] */
export function douplus_order_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/douplus/order/list/', 'GET', advertiserId, params, token);
}

/** 获取订单数据报表  [POST /open_api/v3.0/douplus/order/report/] */
export function douplus_order_report(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/douplus/order/report/', 'POST', advertiserId, params, token);
}

/** 创建订单接口  [POST /open_api/v3.0/douplus/order/create/] */
export function douplus_order_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/douplus/order/create/', 'POST', advertiserId, params, token);
}

/** 终止订单接口  [POST /open_api/v3.0/douplus/order/close/] */
export function douplus_order_close(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/douplus/order/close/', 'POST', advertiserId, params, token);
}

/** 续费DOU+订单接口  [POST /open_api/v3.0/douplus/order/renew/] */
export function douplus_order_renew(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/douplus/order/renew/', 'POST', advertiserId, params, token);
}

/** 获取可投放视频列表  [GET /open_api/v3.0/douplus/optional_items/list/] */
export function douplus_optional_items_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/douplus/optional_items/list/', 'GET', advertiserId, params, token);
}

/** 获取视频可投放转化目标  [GET /open_api/v3.0/douplus/optional_targets/list/] */
export function douplus_optional_targets_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/douplus/optional_targets/list/', 'GET', advertiserId, params, token);
}

/** 获取推送数据列表  [GET /open_api/2/spi_task/get/] */
export function spi_task_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/spi_task/get/', 'GET', advertiserId, params, token);
}

/** 自定义报表  [GET /open_api/v3.0/report/custom/get/] */
export function report_custom_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/report/custom/get/', 'GET', advertiserId, params, token);
}

/** 获取自定义报表可用指标和维度  [GET /open_api/v3.0/report/custom/config/get/] */
export function report_custom_config_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/report/custom/config/get/', 'GET', advertiserId, params, token);
}

/** 代理商竞价投放数据  [GET /open_api/2/agent/adv/bidding/list/query/] */
export function agent_adv_bidding_list_query(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/adv/bidding/list/query/', 'GET', advertiserId, params, token);
}

/** 代理商品牌投放数据  [GET /open_api/2/agent/adv/brand/list/query/] */
export function agent_adv_brand_list_query(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/agent/adv/brand/list/query/', 'GET', advertiserId, params, token);
}

/** 直播间受众分析报表【新】  [GET /open_api/v3.0/report/report/live_room/audience/portrait/get/] */
export function report_report_live_room_audience_portrait_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/report/report/live_room/audience/portrait/get/', 'GET', advertiserId, params, token);
}

/** 直播间分析报表【新】  [GET /open_api/v3.0/report/live_room/analysis/get/] */
export function report_live_room_analysis_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/report/live_room/analysis/get/', 'GET', advertiserId, params, token);
}

/** 橙子建站落地页数据  [GET /open_api/2/report/site/page/] */
export function report_site_page(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/report/site/page/', 'GET', advertiserId, params, token);
}

/** 创建【核算明细数据】下载任务  [POST /open_api/2/file/rebate/rebate_download/create_task/] */
export function file_rebate_rebate_download_create_task(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/rebate/rebate_download/create_task/', 'POST', advertiserId, params, token);
}

/** （2024）创建【明点化素材数据】下载任务  [POST /open_api/2/file/rebate/material_download/create_task/] */
export function file_rebate_material_download_create_task(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/rebate/material_download/create_task/', 'POST', advertiserId, params, token);
}

/** （2024）查询下载任务  [POST /open_api/2/file/rebate/material_download/get_download_task_list/] */
export function file_rebate_material_download_get_download_task_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/rebate/material_download/get_download_task_list/', 'POST', advertiserId, params, token);
}

/** （2024）下载任务结果  [POST /open_api/2/file/rebate/material_download/download_file/] */
export function file_rebate_material_download_download_file(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/rebate/material_download/download_file/', 'POST', advertiserId, params, token);
}

/** 【代理返点】创建下载任务-通用  [POST /open_api/2/file/rebate/common_download/create_task/] */
export function file_rebate_common_download_create_task(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/rebate/common_download/create_task/', 'POST', advertiserId, params, token);
}

/** 【代理返点】查询下载任务-通用  [POST /open_api/2/file/rebate/common_download/get_download_task_list/] */
export function file_rebate_common_download_get_download_task_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/rebate/common_download/get_download_task_list/', 'POST', advertiserId, params, token);
}

/** 【代理返点】下载任务结果-通用  [POST /open_api/2/file/rebate/common_download/download_file/] */
export function file_rebate_common_download_download_file(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/rebate/common_download/download_file/', 'POST', advertiserId, params, token);
}

/** 数据源文件上传  [POST /open_api/2/dmp/data_source/file/upload/] */
export function dmp_data_source_file_upload(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dmp/data_source/file/upload/', 'POST', advertiserId, params, token);
}

/** 数据源创建  [POST /open_api/2/dmp/data_source/create/] */
export function dmp_data_source_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dmp/data_source/create/', 'POST', advertiserId, params, token);
}

/** 数据源更新  [POST /open_api/2/dmp/data_source/update/] */
export function dmp_data_source_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dmp/data_source/update/', 'POST', advertiserId, params, token);
}

/** 数据源详细信息  [GET /open_api/2/dmp/data_source/read/] */
export function dmp_data_source_read(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dmp/data_source/read/', 'GET', advertiserId, params, token);
}

/** 人群包列表  [GET /open_api/2/dmp/custom_audience/select/] */
export function dmp_custom_audience_select(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dmp/custom_audience/select/', 'GET', advertiserId, params, token);
}

/** 人群包详细信息  [GET /open_api/2/dmp/custom_audience/read/] */
export function dmp_custom_audience_read(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dmp/custom_audience/read/', 'GET', advertiserId, params, token);
}

/** 发布人群包  [POST /open_api/2/dmp/custom_audience/publish/] */
export function dmp_custom_audience_publish(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dmp/custom_audience/publish/', 'POST', advertiserId, params, token);
}

/** 推送人群包  [POST /open_api/2/dmp/custom_audience/push_v2/] */
export function dmp_custom_audience_push_v2(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dmp/custom_audience/push_v2/', 'POST', advertiserId, params, token);
}

/** 删除人群包  [POST /open_api/2/dmp/custom_audience/delete/] */
export function dmp_custom_audience_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dmp/custom_audience/delete/', 'POST', advertiserId, params, token);
}

/** 获取投放账户关联云图账户信息  [GET /open_api/2/dmp/brand/get/] */
export function dmp_brand_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dmp/brand/get/', 'GET', advertiserId, params, token);
}

/** 推送dmp人群包到云图账户  [POST /open_api/2/dmp/custom_audience/copy/] */
export function dmp_custom_audience_copy(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dmp/custom_audience/copy/', 'POST', advertiserId, params, token);
}

/** 查询快应用信息  [GET /open_api/2/tool/quick_app_management/quick_app/get/] */
export function tool_quick_app_management_quick_app_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tool/quick_app_management/quick_app/get/', 'GET', advertiserId, params, token);
}

/** 查询游戏玩法列表  [GET /open_api/v3.0/gameplay/list/] */
export function gameplay_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/gameplay/list/', 'GET', advertiserId, params, token);
}

/** 查询IOS应用列表  [GET /open_api/v3.0/ios_app/list/] */
export function ios_app_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/ios_app/list/', 'GET', advertiserId, params, token);
}

/** 发布安卓应用母包  [POST /open_api/v3.0/tools/ebp/app/publish/] */
export function tools_ebp_app_publish(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/app/publish/', 'POST', advertiserId, params, token);
}

/** 查询安卓应用分包列表  [GET /open_api/v3.0/tools/ebp/app_extend/list/] */
export function tools_ebp_app_extend_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/app_extend/list/', 'GET', advertiserId, params, token);
}

/** 创建安卓分包  [POST /open_api/v3.0/tools/ebp/app_extend/create/] */
export function tools_ebp_app_extend_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/app_extend/create/', 'POST', advertiserId, params, token);
}

/** 更新安卓应用分包版本  [POST /open_api/v3.0/tools/ebp/app_extend/update/] */
export function tools_ebp_app_extend_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/app_extend/update/', 'POST', advertiserId, params, token);
}

/** 获取安卓应用列表  [GET /open_api/v3.0/tools/ebp/app/list/] */
export function tools_ebp_app_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/app/list/', 'GET', advertiserId, params, token);
}

/** 获取游戏预约列表  [GET /open_api/v3.0/tools/ebp/app_game_book/list/] */
export function tools_ebp_app_game_book_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/app_game_book/list/', 'GET', advertiserId, params, token);
}

/** 查询安卓应用母包详情  [GET /open_api/v3.0/tools/ebp/app/detail/] */
export function tools_ebp_app_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/app/detail/', 'GET', advertiserId, params, token);
}

/** 更新安卓应用母包  [POST /open_api/v3.0/tools/ebp/app/update/] */
export function tools_ebp_app_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/app/update/', 'POST', advertiserId, params, token);
}

/** 创建异步文件上传任务  [POST /open_api/2/tools/app_management/upload_task/create/] */
export function tools_app_management_upload_task_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/upload_task/create/', 'POST', advertiserId, params, token);
}

/** 查询文件异步上传任务  [GET /open_api/2/tools/app_management/upload_task/list/] */
export function tools_app_management_upload_task_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/upload_task/list/', 'GET', advertiserId, params, token);
}

/** 查询安卓应用母包  [GET /open_api/2/tools/app_management/android_basic_package/get/] */
export function tools_app_management_android_basic_package_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/android_basic_package/get/', 'GET', advertiserId, params, token);
}

/** 更新安卓应用母包  [POST /open_api/2/tools/app_management/android_basic_package/update/] */
export function tools_app_management_android_basic_package_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/android_basic_package/update/', 'POST', advertiserId, params, token);
}

/** 发布安卓应用母包  [POST /open_api/2/tools/app_management/android_basic_package/publish/] */
export function tools_app_management_android_basic_package_publish(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/android_basic_package/publish/', 'POST', advertiserId, params, token);
}

/** 查询游戏预约信息  [GET /open_api/2/tools/app_management/booking/get/] */
export function tools_app_management_booking_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/booking/get/', 'GET', advertiserId, params, token);
}

/** 查询游戏预约记录详情  [GET /open_api/2/tools/app_management/booking_records/get/] */
export function tools_app_management_booking_records_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/booking_records/get/', 'GET', advertiserId, params, token);
}

/** 查询安卓应用信息  [GET /open_api/2/tools/app_management/app/get/] */
export function tools_app_management_app_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/app/get/', 'GET', advertiserId, params, token);
}

/** 查询安卓应用信息（支持所有账户体系）  [GET /open_api/2/tools/app_management/android_app/list/] */
export function tools_app_management_android_app_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/android_app/list/', 'GET', advertiserId, params, token);
}

/** 提交解析应用包任务  [POST /open_api/2/tools/download/package/parse/] */
export function tools_download_package_parse(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/download/package/parse/', 'POST', advertiserId, params, token);
}

/** 查询包解析状态  [GET /open_api/2/tools/download/package/get/] */
export function tools_download_package_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/download/package/get/', 'GET', advertiserId, params, token);
}

/** 查询鸿蒙应用列表  [POST /open_api/2/tools/app_management/harmony_app_list/] */
export function tools_app_management_harmony_app_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/harmony_app_list/', 'POST', advertiserId, params, token);
}

/** 查询安卓应用分包列表 （支持所有账户体系）  [POST /open_api/2/tools/app_management/extend_package/list_v2/] */
export function tools_app_management_extend_package_list_v2(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/extend_package/list_v2/', 'POST', advertiserId, params, token);
}

/** 创建安卓应用分包  [POST /open_api/2/tools/app_management/extend_package/create/] */
export function tools_app_management_extend_package_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/extend_package/create/', 'POST', advertiserId, params, token);
}

/** 创建安卓应用分包 （支持所有账户体系）  [POST /open_api/2/tools/app_management/extend_package/create_v2/] */
export function tools_app_management_extend_package_create_v2(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/extend_package/create_v2/', 'POST', advertiserId, params, token);
}

/** 更新安卓应用分包版本  [POST /open_api/2/tools/app_management/extend_package/update/] */
export function tools_app_management_extend_package_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/extend_package/update/', 'POST', advertiserId, params, token);
}

/** 更新安卓应用分包版本（支持所有账户体系）  [POST /open_api/2/tools/app_management/extend_package/update_v2/] */
export function tools_app_management_extend_package_update_v2(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/extend_package/update_v2/', 'POST', advertiserId, params, token);
}

/** 查看应用共享范围  [GET /open_api/2/tools/app_management/share_account/list/] */
export function tools_app_management_share_account_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/share_account/list/', 'GET', advertiserId, params, token);
}

/** 设置应用共享  [POST /open_api/2/tools/app_management/bp_share/] */
export function tools_app_management_bp_share(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/bp_share/', 'POST', advertiserId, params, token);
}

/** 取消应用共享关系  [POST /open_api/2/tools/app_management/bp_share/cancel/] */
export function tools_app_management_bp_share_cancel(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/bp_share/cancel/', 'POST', advertiserId, params, token);
}

/** 更新应用共享关系  [POST /open_api/2/tools/app_management/update/authorization/] */
export function tools_app_management_update_authorization(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/app_management/update/authorization/', 'POST', advertiserId, params, token);
}

/** 微信小游戏列表  [GET /open_api/v3.0/tools/ebp/wechat_game/list/] */
export function tools_ebp_wechat_game_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/wechat_game/list/', 'GET', advertiserId, params, token);
}

/** 新建微信小程序  [POST /open_api/v3.0/tools/ebp/wechat_applet/create/] */
export function tools_ebp_wechat_applet_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/wechat_applet/create/', 'POST', advertiserId, params, token);
}

/** 获取微信小程序列表  [GET /open_api/v3.0/tools/ebp/wechat_applet/list/] */
export function tools_ebp_wechat_applet_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/wechat_applet/list/', 'GET', advertiserId, params, token);
}

/** 更新微信小程序  [POST /open_api/v3.0/tools/ebp/wechat_applet/update/] */
export function tools_ebp_wechat_applet_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/wechat_applet/update/', 'POST', advertiserId, params, token);
}

/** 更新微信小游戏  [POST /open_api/v3.0/tools/ebp/wechat_game/update/] */
export function tools_ebp_wechat_game_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/wechat_game/update/', 'POST', advertiserId, params, token);
}

/** 新建微信小游戏  [POST /open_api/v3.0/tools/ebp/wechat_game/create/] */
export function tools_ebp_wechat_game_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/wechat_game/create/', 'POST', advertiserId, params, token);
}

/** 获取微信小程序列表  [GET /open_api/v3.0/tools/wechat_applet/list/] */
export function tools_wechat_applet_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/wechat_applet/list/', 'GET', advertiserId, params, token);
}

/** 获取微信小游戏列表  [GET /open_api/v3.0/tools/wechat_game/list/] */
export function tools_wechat_game_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/wechat_game/list/', 'GET', advertiserId, params, token);
}

/** 创建微信小游戏  [POST /open_api/v3.0/tools/wechat_game/create/] */
export function tools_wechat_game_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/wechat_game/create/', 'POST', advertiserId, params, token);
}

/** 创建微信小程序  [POST /open_api/v3.0/tools/wechat_applet/create/] */
export function tools_wechat_applet_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/wechat_applet/create/', 'POST', advertiserId, params, token);
}

/** 更新微信小程序  [POST /open_api/v3.0/tools/wechat_applet/update/] */
export function tools_wechat_applet_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/wechat_applet/update/', 'POST', advertiserId, params, token);
}

/** 获取字节小游戏链接详情  [GET /open_api/v3.0/tools/ebp/micro_game/link/list/] */
export function tools_ebp_micro_game_link_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/micro_game/link/list/', 'GET', advertiserId, params, token);
}

/** 获取字节小程序link详情  [GET /open_api/v3.0/tools/ebp/micro_applet/link/list/] */
export function tools_ebp_micro_applet_link_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/micro_applet/link/list/', 'GET', advertiserId, params, token);
}

/** 获取字节小游戏列表  [GET /open_api/v3.0/tools/ebp/micro_game/list/] */
export function tools_ebp_micro_game_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/micro_game/list/', 'GET', advertiserId, params, token);
}

/** 新增字节小游戏  [POST /open_api/v3.0/tools/ebp/micro_game/create/] */
export function tools_ebp_micro_game_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/micro_game/create/', 'POST', advertiserId, params, token);
}

/** 更新字节小游戏  [POST /open_api/v3.0/tools/ebp/micro_game/update/] */
export function tools_ebp_micro_game_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/micro_game/update/', 'POST', advertiserId, params, token);
}

/** 获取字节小程序列表  [GET /open_api/v3.0/tools/ebp/micro_applet/list/] */
export function tools_ebp_micro_applet_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/micro_applet/list/', 'GET', advertiserId, params, token);
}

/** 新建字节小程序  [POST /open_api/v3.0/tools/ebp/micro_applet/create/] */
export function tools_ebp_micro_applet_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/micro_applet/create/', 'POST', advertiserId, params, token);
}

/** 更新字节小程序  [POST /open_api/v3.0/tools/ebp/micro_applet/update/] */
export function tools_ebp_micro_applet_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/micro_applet/update/', 'POST', advertiserId, params, token);
}

/** 创建字节小程序  [POST /open_api/v3.0/tools/micro_app/create/] */
export function tools_micro_app_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/micro_app/create/', 'POST', advertiserId, params, token);
}

/** 更新字节小程序  [POST /open_api/v3.0/tools/micro_app/update/] */
export function tools_micro_app_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/micro_app/update/', 'POST', advertiserId, params, token);
}

/** 获取字节小程序  [GET /open_api/v3.0/tools/micro_app/list/] */
export function tools_micro_app_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/micro_app/list/', 'GET', advertiserId, params, token);
}

/** 创建字节小游戏  [POST /open_api/v3.0/tools/micro_game/create/] */
export function tools_micro_game_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/micro_game/create/', 'POST', advertiserId, params, token);
}

/** 更新字节小游戏  [POST /open_api/v3.0/tools/micro_game/update/] */
export function tools_micro_game_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/micro_game/update/', 'POST', advertiserId, params, token);
}

/** 获取字节小游戏  [GET /open_api/v3.0/tools/micro_game/list/] */
export function tools_micro_game_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/micro_game/list/', 'GET', advertiserId, params, token);
}

/** 获取字节小程序/小游戏详情内容  [GET /open_api/v3.0/tools/asset_link/list/] */
export function tools_asset_link_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/asset_link/list/', 'GET', advertiserId, params, token);
}

/** 查询字节小游戏归因激活时间窗  [GET /open_api/v3.0/tools/micro_game/convert_window/get/] */
export function tools_micro_game_convert_window_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/micro_game/convert_window/get/', 'GET', advertiserId, params, token);
}

/** 修改字节小游戏归因激活时间窗  [POST /open_api/v3.0/tools/micro_game/convert_window/update/] */
export function tools_micro_game_convert_window_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/micro_game/convert_window/update/', 'POST', advertiserId, params, token);
}

/** 设置小游戏&小程序&商品库&商品共享  [POST /open_api/v3.0/tools/bp_asset_management/share/] */
export function tools_bp_asset_management_share(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/bp_asset_management/share/', 'POST', advertiserId, params, token);
}

/** 取消小游戏/小程序/商品库/商品共享关系  [POST /open_api/v3.0/tools/bp_asset_management/share/cancel/] */
export function tools_bp_asset_management_share_cancel(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/bp_asset_management/share/cancel/', 'POST', advertiserId, params, token);
}

/** 查看小游戏/小程序共享范围  [GET /open_api/v3.0/tools/bp_asset_management/share/get/] */
export function tools_bp_asset_management_share_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/bp_asset_management/share/get/', 'GET', advertiserId, params, token);
}

/** 获取账户可投品牌列表  [GET /open_api/v3.0/dpa/brand/adv_auth/fuzzy/get/] */
export function dpa_brand_adv_auth_fuzzy_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/brand/adv_auth/fuzzy/get/', 'GET', advertiserId, params, token);
}

/** 获取账户可用品牌行业信息  [GET /open_api/v3.0/dpa/brand/adv_auth/industry/get/] */
export function dpa_brand_adv_auth_industry_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/brand/adv_auth/industry/get/', 'GET', advertiserId, params, token);
}

/** 获取通用版商品列表  [GET /open_api/v3.0/dpa/ebp/product/list/] */
export function dpa_ebp_product_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/product/list/', 'GET', advertiserId, params, token);
}

/** 获取通用版商品详情  [GET /open_api/v3.0/dpa/ebp/product/detail/get/] */
export function dpa_ebp_product_detail_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/product/detail/get/', 'GET', advertiserId, params, token);
}

/** 获取升级版商品详情  [GET /open_api/v3.0/dpa/ebp/clue_product/get/] */
export function dpa_ebp_clue_product_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/clue_product/get/', 'GET', advertiserId, params, token);
}

/** 获取商品库DPA分类  [GET /open_api/v3.0/dpa/ebp/category/get/] */
export function dpa_ebp_category_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/category/get/', 'GET', advertiserId, params, token);
}

/** 获取商品库列表  [GET /open_api/v3.0/dpa/ebp/library/list/] */
export function dpa_ebp_library_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/library/list/', 'GET', advertiserId, params, token);
}

/** 获取升级版商品列表  [GET /open_api/v3.0/dpa/ebp/clue_product/list/] */
export function dpa_ebp_clue_product_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/clue_product/list/', 'GET', advertiserId, params, token);
}

/** 删除通用版商品  [POST /open_api/v3.0/dpa/ebp/product/delete/] */
export function dpa_ebp_product_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/product/delete/', 'POST', advertiserId, params, token);
}

/** 批量修改DPA商品状态  [POST /open_api/v3.0/dpa/ebp/product_status/batch_update/] */
export function dpa_ebp_product_status_batch_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/product_status/batch_update/', 'POST', advertiserId, params, token);
}

/** 升级版组织-新建通用版商品  [POST /open_api/v3.0/dpa/ebp/product/create/] */
export function dpa_ebp_product_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/product/create/', 'POST', advertiserId, params, token);
}

/** 升级版组织-编辑通用版商品  [POST /open_api/v3.0/dpa/ebp/product/update/] */
export function dpa_ebp_product_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/product/update/', 'POST', advertiserId, params, token);
}

/** 升级版组织-创建/编辑升级版商品  [POST /open_api/v3.0/dpa/ebp/clue_product/save/] */
export function dpa_ebp_clue_product_save(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/clue_product/save/', 'POST', advertiserId, params, token);
}

/** 获取商品库DPA词包  [GET /open_api/v3.0/dpa/ebp/dict/get/] */
export function dpa_ebp_dict_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/dict/get/', 'GET', advertiserId, params, token);
}

/** 删除升级版商品  [POST /open_api/v3.0/dpa/ebp/clue_product/delete/] */
export function dpa_ebp_clue_product_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/clue_product/delete/', 'POST', advertiserId, params, token);
}

/** 查询短剧商品原片授权申请状态  [GET /open_api/v3.0/dpa/ebp/playlet/auth/get/] */
export function dpa_ebp_playlet_auth_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/ebp/playlet/auth/get/', 'GET', advertiserId, params, token);
}

/** 获取商品库信息  [POST /open_api/2/dpa/product/availables/] */
export function dpa_product_availables(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/product/availables/', 'POST', advertiserId, params, token);
}

/** 获取商品库元信息  [GET /open_api/2/dpa/meta/get/] */
export function dpa_meta_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/meta/get/', 'GET', advertiserId, params, token);
}

/** 获取商品列表  [GET /open_api/2/dpa/detail/get/] */
export function dpa_detail_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/detail/get/', 'GET', advertiserId, params, token);
}

/** 获取商品详情  [GET /open_api/2/dpa/product/detail/get/] */
export function dpa_product_detail_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/product/detail/get/', 'GET', advertiserId, params, token);
}

/** 获取升级版商品列表  [GET /open_api/2/dpa/clue_product/list/] */
export function dpa_clue_product_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/clue_product/list/', 'GET', advertiserId, params, token);
}

/** 获取升级版商品详情  [GET /open_api/2/dpa/clue_product/detail/] */
export function dpa_clue_product_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/clue_product/detail/', 'GET', advertiserId, params, token);
}

/** 获取投放条件列表（通用版）  [GET /open_api/2/dpa/assets/list/] */
export function dpa_assets_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/assets/list/', 'GET', advertiserId, params, token);
}

/** 获取投放条件详情（通用版）  [GET /open_api/2/dpa/assets/detail/read/] */
export function dpa_assets_detail_read(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/assets/detail/read/', 'GET', advertiserId, params, token);
}

/** 获取商品投放条件列表（线索版）  [GET /open_api/2/dpa/asset_v2/list/] */
export function dpa_asset_v2_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/asset_v2/list/', 'GET', advertiserId, params, token);
}

/** 获取DPA分类  [GET /open_api/2/dpa/category/get/] */
export function dpa_category_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/category/get/', 'GET', advertiserId, params, token);
}

/** 获取DPA词包  [GET /open_api/2/dpa/dict/get/] */
export function dpa_dict_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/dict/get/', 'GET', advertiserId, params, token);
}

/** 获取DPA私有模板  [GET /open_api/2/dpa/template/get/] */
export function dpa_template_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/template/get/', 'GET', advertiserId, params, token);
}

/** 获取 DPA 商品库视频模板  [GET /open_api/2/dpa/video/get/] */
export function dpa_video_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/video/get/', 'GET', advertiserId, params, token);
}

/** 【新版】创建通用版商品（已有商品id）/修改通用版商品  [POST /open_api/2/dpa/product/update/] */
export function dpa_product_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/product/update/', 'POST', advertiserId, params, token);
}

/** 【新版】创建通用版商品（无商品id）  [POST /open_api/2/dpa/product/create/] */
export function dpa_product_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/product/create/', 'POST', advertiserId, params, token);
}

/** 创建/编辑升级版商品  [POST /open_api/2/dpa/clue_product/save/] */
export function dpa_clue_product_save(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/clue_product/save/', 'POST', advertiserId, params, token);
}

/** 批量修改DPA商品状态  [POST /open_api/2/dpa/product_status/batch_update/] */
export function dpa_product_status_batch_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/product_status/batch_update/', 'POST', advertiserId, params, token);
}

/** 删除通用版商品  [POST /open_api/2/dpa/product/delete/] */
export function dpa_product_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/product/delete/', 'POST', advertiserId, params, token);
}

/** 删除升级版商品  [POST /open_api/2/dpa/clue_product/delete/] */
export function dpa_clue_product_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/clue_product/delete/', 'POST', advertiserId, params, token);
}

/** 查询短剧商品原片授权申请状态  [GET /open_api/2/dpa/playlet/auth/get/] */
export function dpa_playlet_auth_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/dpa/playlet/auth/get/', 'GET', advertiserId, params, token);
}

/** 查询短剧可投状态  [GET /open_api/v3.0/dpa/album_status/get/] */
export function dpa_album_status_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/album_status/get/', 'GET', advertiserId, params, token);
}

/** 上传短剧剧目  [POST /open_api/v3.0/dpa/album/create/] */
export function dpa_album_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/dpa/album/create/', 'POST', advertiserId, params, token);
}

/** 升级版工作台上传视频  [POST /open_api/v3.0/tools/ebp/video/upload/] */
export function tools_ebp_video_upload(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/video/upload/', 'POST', advertiserId, params, token);
}

/** 升级版工作台更新视频  [POST /open_api/v3.0/tools/ebp/video/update/] */
export function tools_ebp_video_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/video/update/', 'POST', advertiserId, params, token);
}

/** 升级版工作台批量删除视频  [POST /open_api/v3.0/tools/ebp/video/delete/] */
export function tools_ebp_video_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/video/delete/', 'POST', advertiserId, params, token);
}

/** 升级版工作台素材共享  [POST /open_api/v3.0/tools/ebp/material/auth/create/] */
export function tools_ebp_material_auth_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/material/auth/create/', 'POST', advertiserId, params, token);
}

/** 升级版工作台查询素材共享范围  [GET /open_api/v3.0/tools/ebp/material/auth/list/] */
export function tools_ebp_material_auth_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/material/auth/list/', 'GET', advertiserId, params, token);
}

/** 升级版工作台获取视频素材评估标签  [GET /open_api/v3.0/tools/ebp/video_attributes/list/] */
export function tools_ebp_video_attributes_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/video_attributes/list/', 'GET', advertiserId, params, token);
}

/** 升级版工作台取消素材共享  [POST /open_api/v3.0/tools/ebp/material/auth/delete/] */
export function tools_ebp_material_auth_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ebp/material/auth/delete/', 'POST', advertiserId, params, token);
}

/** 获取试玩/直玩素材列表  [GET /open_api/v3.0/file/playable/list/] */
export function file_playable_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/file/playable/list/', 'GET', advertiserId, params, token);
}

/** 上传试玩/直玩素材  [POST /open_api/v3.0/file/playable/create/] */
export function file_playable_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/file/playable/create/', 'POST', advertiserId, params, token);
}

/** 获取图片素材  [GET /open_api/2/file/image/get/] */
export function file_image_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/image/get/', 'GET', advertiserId, params, token);
}

/** 获取账户可用的组织视频列表  [GET /open_api/v3.0/file/ebp_video/get/] */
export function file_ebp_video_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/file/ebp_video/get/', 'GET', advertiserId, params, token);
}

/** 获取视频素材  [GET /open_api/2/file/video/get/] */
export function file_video_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/get/', 'GET', advertiserId, params, token);
}

/** 获取视频智能封面  [POST /open_api/2/tools/video_cover/suggest/] */
export function tools_video_cover_suggest(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/video_cover/suggest/', 'POST', advertiserId, params, token);
}

/** 获取同主体下客户图片素材  [GET /open_api/2/file/image/ad/get/] */
export function file_image_ad_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/image/ad/get/', 'GET', advertiserId, params, token);
}

/** 获取同主体下客户视频素材  [GET /open_api/2/file/video/ad/get/] */
export function file_video_ad_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/ad/get/', 'GET', advertiserId, params, token);
}

/** 素材推送  [POST /open_api/2/file/material/bind/] */
export function file_material_bind(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/material/bind/', 'POST', advertiserId, params, token);
}

/** 批量删除视频素材  [POST /open_api/2/file/video/delete/] */
export function file_video_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/delete/', 'POST', advertiserId, params, token);
}

/** 批量删除图片素材  [POST /open_api/v3.0/file/image/delete/] */
export function file_image_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/file/image/delete/', 'POST', advertiserId, params, token);
}

/** 批量删除图文  [POST /open_api/2/carousel/delete/] */
export function carousel_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/carousel/delete/', 'POST', advertiserId, params, token);
}

/** 更新视频  [POST /open_api/2/file/video/update/] */
export function file_video_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/update/', 'POST', advertiserId, params, token);
}

/** 获取抖音主页视频  [GET /open_api/2/file/video/aweme/get/] */
export function file_video_aweme_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/aweme/get/', 'GET', advertiserId, params, token);
}

/** 获取低效素材  [GET /open_api/2/file/video/efficiency/get/] */
export function file_video_efficiency_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/efficiency/get/', 'GET', advertiserId, params, token);
}

/** 获取素材标签列表  [GET /open_api/2/file/material/list/] */
export function file_material_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/material/list/', 'GET', advertiserId, params, token);
}

/** 查询素材标签信息  [GET /open_api/2/file/material/detail/] */
export function file_material_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/material/detail/', 'GET', advertiserId, params, token);
}

/** 获取视频素材评估标签（新版）  [GET /open_api/2/file/material_attributes/list/] */
export function file_material_attributes_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/material_attributes/list/', 'GET', advertiserId, params, token);
}

/** 创建素材清理任务  [POST /open_api/2/file/video/material/clear_task/create/] */
export function file_video_material_clear_task_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/material/clear_task/create/', 'POST', advertiserId, params, token);
}

/** 获取清理任务列表  [GET /open_api/2/file/video/material/clear_task/get/] */
export function file_video_material_clear_task_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/material/clear_task/get/', 'GET', advertiserId, params, token);
}

/** 下载清理任务结果  [GET /open_api/2/file/video/material/clear_task_result/get/] */
export function file_video_material_clear_task_result_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/material/clear_task_result/get/', 'GET', advertiserId, params, token);
}

/** 获取音频素材（用于图文新建）  [GET /open_api/2/file/audio/get/] */
export function file_audio_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/audio/get/', 'GET', advertiserId, params, token);
}

/** 获取图文素材  [GET /open_api/2/carousel/list/] */
export function carousel_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/carousel/list/', 'GET', advertiserId, params, token);
}

/** 更新图文信息  [POST /open_api/2/carousel/update/] */
export function carousel_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/carousel/update/', 'POST', advertiserId, params, token);
}

/** 获取同主体下客户图文素材  [GET /open_api/2/carousel/ad/get/] */
export function carousel_ad_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/carousel/ad/get/', 'GET', advertiserId, params, token);
}

/** 【代理商】上传自产首发素材至方舟（搬运治理）  [POST /open_api/2/file/video/agent/] */
export function file_video_agent(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/agent/', 'POST', advertiserId, params, token);
}

/** 【代理商】批量暂停明点无效素材  [POST /open_api/2/file/video/pause/] */
export function file_video_pause(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/file/video/pause/', 'POST', advertiserId, params, token);
}

/** 代理商创建前测任务  [POST /open_api/2/diagnosis_task/agent/create/] */
export function diagnosis_task_agent_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/diagnosis_task/agent/create/', 'POST', advertiserId, params, token);
}

/** 代理商获取任务列表  [GET /open_api/2/diagnosis_task/agent/list/] */
export function diagnosis_task_agent_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/diagnosis_task/agent/list/', 'GET', advertiserId, params, token);
}

/** 代理商轮询任务结果  [GET /open_api/2/diagnosis_task/agent/get/] */
export function diagnosis_task_agent_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/diagnosis_task/agent/get/', 'GET', advertiserId, params, token);
}

/** Adv创建前测任务  [POST /open_api/2/diagnosis_task/adv/create/] */
export function diagnosis_task_adv_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/diagnosis_task/adv/create/', 'POST', advertiserId, params, token);
}

/** Adv获取任务列表  [GET /open_api/2/diagnosis_task/adv/list/] */
export function diagnosis_task_adv_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/diagnosis_task/adv/list/', 'GET', advertiserId, params, token);
}

/** Adv轮询任务结果  [GET /open_api/2/diagnosis_task/adv/get/] */
export function diagnosis_task_adv_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/diagnosis_task/adv/get/', 'GET', advertiserId, params, token);
}

/** 创建橙子建站站点  [POST /open_api/2/tools/site/create/] */
export function tools_site_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site/create/', 'POST', advertiserId, params, token);
}

/** 修改橙子建站站点  [POST /open_api/2/tools/site/update/] */
export function tools_site_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site/update/', 'POST', advertiserId, params, token);
}

/** 更改橙子建站站点状态  [POST /open_api/2/tools/site/update_status/] */
export function tools_site_update_status(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site/update_status/', 'POST', advertiserId, params, token);
}

/** 获取橙子建站站点预览地址  [POST /open_api/2/tools/site/preview/] */
export function tools_site_preview(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site/preview/', 'POST', advertiserId, params, token);
}

/** 获取橙子建站站点详细信息  [GET /open_api/2/tools/site/read/] */
export function tools_site_read(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site/read/', 'GET', advertiserId, params, token);
}

/** 获取橙子建站站点列表  [GET /open_api/2/tools/site/get/] */
export function tools_site_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site/get/', 'GET', advertiserId, params, token);
}

/** 建站工具——查询已有智能电话  [GET /open_api/2/tools/clue/smart_phone/get/] */
export function tools_clue_smart_phone_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/clue/smart_phone/get/', 'GET', advertiserId, params, token);
}

/** 建站工具——查询已有表单列表  [GET /open_api/2/tools/clue/form/get/] */
export function tools_clue_form_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/clue/form/get/', 'GET', advertiserId, params, token);
}

/** 建站工具——查询表单详情  [GET /open_api/2/tools/clue/form/detail/] */
export function tools_clue_form_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/clue/form/detail/', 'GET', advertiserId, params, token);
}

/** 获取落地页预约表单信息  [GET /open_api/2/tools/site/forms/list/] */
export function tools_site_forms_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site/forms/list/', 'GET', advertiserId, params, token);
}

/** 建站工具-建站样式复制（跨账户）  [POST /open_api/2/tools/site/handsel/] */
export function tools_site_handsel(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site/handsel/', 'POST', advertiserId, params, token);
}

/** 建站工具-建站复制  [POST /open_api/2/tools/site/copy/] */
export function tools_site_copy(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site/copy/', 'POST', advertiserId, params, token);
}

/** 通过优化目标获取橙子落地页站点信息  [GET /open_api/v3.0/tools/orange_site/get/] */
export function tools_orange_site_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/orange_site/get/', 'GET', advertiserId, params, token);
}

/** 获取第三方落地页站点列表  [GET /open_api/2/tools/third_site/get/] */
export function tools_third_site_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/third_site/get/', 'GET', advertiserId, params, token);
}

/** 修改第三方落地页站点  [POST /open_api/2/tools/third_site/update/] */
export function tools_third_site_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/third_site/update/', 'POST', advertiserId, params, token);
}

/** 删除第三方落地页站点  [POST /open_api/2/tools/third_site/delete/] */
export function tools_third_site_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/third_site/delete/', 'POST', advertiserId, params, token);
}

/** 获取第三方落地页预览地址  [POST /open_api/2/tools/third_site/preview/] */
export function tools_third_site_preview(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/third_site/preview/', 'POST', advertiserId, params, token);
}

/** 创建落地页组  [POST /open_api/2/tools/landing_group/create/] */
export function tools_landing_group_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/landing_group/create/', 'POST', advertiserId, params, token);
}

/** 获取落地页组  [GET /open_api/2/tools/landing_group/get/] */
export function tools_landing_group_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/landing_group/get/', 'GET', advertiserId, params, token);
}

/** 更新落地页组站点状态  [POST /open_api/2/tools/landing_group/site_opt_status/update/] */
export function tools_landing_group_site_opt_status_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/landing_group/site_opt_status/update/', 'POST', advertiserId, params, token);
}

/** 更新落地页组信息  [POST /open_api/2/tools/landing_group/update/] */
export function tools_landing_group_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/landing_group/update/', 'POST', advertiserId, params, token);
}

/** 基于站点创建模板  [POST /open_api/2/tools/site_template/create/] */
export function tools_site_template_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site_template/create/', 'POST', advertiserId, params, token);
}

/** 基于模板创建站点  [POST /open_api/2/tools/site_template/site/create/] */
export function tools_site_template_site_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site_template/site/create/', 'POST', advertiserId, params, token);
}

/** 获取站点模版列表  [GET /open_api/2/tools/site_template/get/] */
export function tools_site_template_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site_template/get/', 'GET', advertiserId, params, token);
}

/** 获取模版预览链接  [POST /open_api/2/tools/site_template/preview/] */
export function tools_site_template_preview(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site_template/preview/', 'POST', advertiserId, params, token);
}

/** 获取模板/站点URL  [GET /open_api/2/tools/site_template/pic_url/get/] */
export function tools_site_template_pic_url_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/site_template/pic_url/get/', 'GET', advertiserId, params, token);
}

/** 获取线索列表  [GET /open_api/2/tools/clue/get/] */
export function tools_clue_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/clue/get/', 'GET', advertiserId, params, token);
}

/** 回传有效线索  [POST /open_api/2/tools/clue/callback/] */
export function tools_clue_callback(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/clue/callback/', 'POST', advertiserId, params, token);
}

/** 私信线索转化回传接口  [POST /open_api/2/tools/clue/private_message/callback/] */
export function tools_clue_private_message_callback(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/clue/private_message/callback/', 'POST', advertiserId, params, token);
}

/** 获取表单详情  [GET /open_api/2/clue/form/detail/] */
export function clue_form_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/form/detail/', 'GET', advertiserId, params, token);
}

/** 获取表单列表  [GET /open_api/2/clue/form/list/] */
export function clue_form_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/form/list/', 'GET', advertiserId, params, token);
}

/** 创建表单  [POST /open_api/2/clue/form/create/] */
export function clue_form_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/form/create/', 'POST', advertiserId, params, token);
}

/** 更新表单  [POST /open_api/2/clue/form/update/] */
export function clue_form_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/form/update/', 'POST', advertiserId, params, token);
}

/** 删除表单  [POST /open_api/2/clue/form/delete/] */
export function clue_form_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/form/delete/', 'POST', advertiserId, params, token);
}

/** 创建卡券  [POST /open_api/2/clue/coupon/create/] */
export function clue_coupon_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/coupon/create/', 'POST', advertiserId, params, token);
}

/** 上传券码  [POST /open_api/2/clue/coupon/code/upload/] */
export function clue_coupon_code_upload(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/coupon/code/upload/', 'POST', advertiserId, params, token);
}

/** 获取卡券详情  [GET /open_api/2/clue/coupon/detail/] */
export function clue_coupon_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/coupon/detail/', 'GET', advertiserId, params, token);
}

/** 获取卡券列表  [GET /open_api/2/clue/coupon/get/] */
export function clue_coupon_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/coupon/get/', 'GET', advertiserId, params, token);
}

/** 编辑卡券  [POST /open_api/2/clue/coupon/update/] */
export function clue_coupon_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/coupon/update/', 'POST', advertiserId, params, token);
}

/** 查询券码记录  [GET /open_api/2/clue/coupon/code/get/] */
export function clue_coupon_code_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/coupon/code/get/', 'GET', advertiserId, params, token);
}

/** 核销券码  [POST /open_api/2/clue/coupon/code/consume/] */
export function clue_coupon_code_consume(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/coupon/code/consume/', 'POST', advertiserId, params, token);
}

/** 查询核销员  [GET /open_api/2/clue/coupon/employee/get/] */
export function clue_coupon_employee_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/coupon/employee/get/', 'GET', advertiserId, params, token);
}

/** 添加核销员  [POST /open_api/2/clue/coupon/employee/create/] */
export function clue_coupon_employee_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/coupon/employee/create/', 'POST', advertiserId, params, token);
}

/** 删除核销员  [POST /open_api/2/clue/coupon/employee/delete/] */
export function clue_coupon_employee_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/coupon/employee/delete/', 'POST', advertiserId, params, token);
}

/** 获取家装联盟卡券列表  [GET /open_api/v3.0/decoration/coupon/get/] */
export function decoration_coupon_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/decoration/coupon/get/', 'GET', advertiserId, params, token);
}

/** 创建智能电话  [POST /open_api/2/clue/smartphone/create/] */
export function clue_smartphone_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/smartphone/create/', 'POST', advertiserId, params, token);
}

/** 获取智能电话列表  [GET /open_api/2/clue/smartphone/get/] */
export function clue_smartphone_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/smartphone/get/', 'GET', advertiserId, params, token);
}

/** 删除智能电话  [POST /open_api/2/clue/smartphone/delete/] */
export function clue_smartphone_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/smartphone/delete/', 'POST', advertiserId, params, token);
}

/** 查询智能电话拨打记录  [POST /open_api/2/clue/smartphone/record/] */
export function clue_smartphone_record(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/smartphone/record/', 'POST', advertiserId, params, token);
}

/** 获取微信库微信号列表  [GET /open_api/2/clue/wechat_pool/list/] */
export function clue_wechat_pool_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/wechat_pool/list/', 'GET', advertiserId, params, token);
}

/** 获取微信号码包详情  [GET /open_api/2/clue/wechat_instance/detail/] */
export function clue_wechat_instance_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/wechat_instance/detail/', 'GET', advertiserId, params, token);
}

/** 获取微信号码包列表  [GET /open_api/2/clue/wechat_instance/list/] */
export function clue_wechat_instance_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/wechat_instance/list/', 'GET', advertiserId, params, token);
}

/** 更新微信号码包  [POST /open_api/2/clue/wechat_instance/update/] */
export function clue_wechat_instance_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/clue/wechat_instance/update/', 'POST', advertiserId, params, token);
}

/** 创建组件  [POST /open_api/2/assets/creative_component/create/] */
export function assets_creative_component_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/assets/creative_component/create/', 'POST', advertiserId, params, token);
}

/** 更新组件  [POST /open_api/2/assets/creative_component/update/] */
export function assets_creative_component_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/assets/creative_component/update/', 'POST', advertiserId, params, token);
}

/** 查询组件列表  [GET /open_api/2/assets/creative_component/get/] */
export function assets_creative_component_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/assets/creative_component/get/', 'GET', advertiserId, params, token);
}

/** 创建事件资产  [POST /open_api/2/event_manager/assets/create/] */
export function event_manager_assets_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/event_manager/assets/create/', 'POST', advertiserId, params, token);
}

/** 获取账户下资产列表（新）  [GET /open_api/2/tools/event/all_assets/list/] */
export function tools_event_all_assets_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/event/all_assets/list/', 'GET', advertiserId, params, token);
}

/** 获取已创建资产详情（新）  [GET /open_api/2/tools/event/all_assets/detail/] */
export function tools_event_all_assets_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/event/all_assets/detail/', 'GET', advertiserId, params, token);
}

/** 获取异常应用资产列表  [GET /open_api/v3.0/event_manager/abnormal_assets/get/] */
export function event_manager_abnormal_assets_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/event_manager/abnormal_assets/get/', 'GET', advertiserId, params, token);
}

/** 资产下创建事件  [POST /open_api/2/event_manager/events/create/] */
export function event_manager_events_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/event_manager/events/create/', 'POST', advertiserId, params, token);
}

/** 获取可创建事件列表  [GET /open_api/2/event_manager/available_events/get/] */
export function event_manager_available_events_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/event_manager/available_events/get/', 'GET', advertiserId, params, token);
}

/** 获取资产下已创建事件列表  [GET /open_api/2/event_manager/event_configs/get/] */
export function event_manager_event_configs_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/event_manager/event_configs/get/', 'GET', advertiserId, params, token);
}

/** 事件资产下创建监测链接组  [POST /open_api/2/event_manager/track_url/create/] */
export function event_manager_track_url_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/event_manager/track_url/create/', 'POST', advertiserId, params, token);
}

/** 事件资产下更新监测链接组  [POST /open_api/2/event_manager/track_url/update/] */
export function event_manager_track_url_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/event_manager/track_url/update/', 'POST', advertiserId, params, token);
}

/** 获取事件资产下的监测链接组  [GET /open_api/2/event_manager/track_url/get/] */
export function event_manager_track_url_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/event_manager/track_url/get/', 'GET', advertiserId, params, token);
}

/** 事件管理资产查看共享范围  [GET /open_api/v3.0/event_manager/share/get/] */
export function event_manager_share_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/event_manager/share/get/', 'GET', advertiserId, params, token);
}

/** 事件管理资产共享  [POST /open_api/v3.0/event_manager/share/] */
export function event_manager_share(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/event_manager/share/', 'POST', advertiserId, params, token);
}

/** 事件管理资产取消共享  [POST /open_api/v3.0/event_manager/share/cancel/] */
export function event_manager_share_cancel(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/event_manager/share/cancel/', 'POST', advertiserId, params, token);
}

/** 获取可用优化目标（巨量营销升级版）  [POST /open_api/v3.0/event_manager/optimized_goal/get_v2/] */
export function event_manager_optimized_goal_get_v2(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/event_manager/optimized_goal/get_v2/', 'POST', advertiserId, params, token);
}

/** 获取可用深度优化方式（营销投放升级版）  [GET /open_api/v3.0/event_manager/deep_bid_type/get/] */
export function event_manager_deep_bid_type_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/event_manager/deep_bid_type/get/', 'GET', advertiserId, params, token);
}

/** 获取不活跃账户列表  [GET /open_api/v3.0/tools/inactive_advertiser/list/] */
export function tools_inactive_advertiser_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/inactive_advertiser/list/', 'GET', advertiserId, params, token);
}

/** 查询在投计划配额  [GET /open_api/2/tools/quota/get/] */
export function tools_quota_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/quota/get/', 'GET', advertiserId, params, token);
}

/** 查询受众预估结果  [POST /open_api/2/tools/estimate_audience/] */
export function tools_estimate_audience(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/estimate_audience/', 'POST', advertiserId, params, token);
}

/** 获取绑定的抖音号  [POST /open_api/2/tools/ies_account_search/] */
export function tools_ies_account_search(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/ies_account_search/', 'POST', advertiserId, params, token);
}

/** 操作日志查询  [POST /open_api/2/tools/log_search/] */
export function tools_log_search(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/log_search/', 'POST', advertiserId, params, token);
}

/** 行动号召字段内容获取  [GET /open_api/2/tools/action_text/get/] */
export function tools_action_text_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/action_text/get/', 'GET', advertiserId, params, token);
}

/** 获取预估点击成本  [GET /open_api/2/tools/estimated_price/get/] */
export function tools_estimated_price_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/estimated_price/get/', 'GET', advertiserId, params, token);
}

/** 获取抖音授权关系  [POST /open_api/2/tools/aweme_auth_list/] */
export function tools_aweme_auth_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/aweme_auth_list/', 'POST', advertiserId, params, token);
}

/** 获取创编可用的抖音图文素材  [GET /open_api/v3.0/file/carousel/aweme/get/] */
export function file_carousel_aweme_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/file/carousel/aweme/get/', 'GET', advertiserId, params, token);
}

/** 获取推荐使用的视频素材  [GET /open_api/v3.0/recommend/video/list/] */
export function recommend_video_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/recommend/video/list/', 'GET', advertiserId, params, token);
}

/** 查询视频是否挂载下载类锚点  [POST /open_api/2/tools/video/check_available_anchor/] */
export function tools_video_check_available_anchor(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/video/check_available_anchor/', 'POST', advertiserId, params, token);
}

/** 获取快投推荐出价系数  [GET /open_api/2/tools/search_bid_ratio/get/] */
export function tools_search_bid_ratio_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/search_bid_ratio/get/', 'GET', advertiserId, params, token);
}

/** 获取营销预览二维码（升级版）  [POST /open_api/v3.0/tools/ad_preview/qrcode_get/] */
export function tools_ad_preview_qrcode_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/ad_preview/qrcode_get/', 'POST', advertiserId, params, token);
}

/** 查询白名单能力  [GET /open_api/v3.0/tools/gray/get/] */
export function tools_gray_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/gray/get/', 'GET', advertiserId, params, token);
}

/** 查询建议出价（巨量营销升级版）  [POST /open_api/v3.0/tools/bids/suggest/] */
export function tools_bids_suggest(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/bids/suggest/', 'POST', advertiserId, params, token);
}

/** 查询授权直播抖音达人列表  [GET /open_api/2/tools/live_authorize/list/] */
export function tools_live_authorize_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/live_authorize/list/', 'GET', advertiserId, params, token);
}

/** 获取诊断建议  [GET /open_api/v3.0/tools/diagnosis/suggestion/get/] */
export function tools_diagnosis_suggestion_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/diagnosis/suggestion/get/', 'GET', advertiserId, params, token);
}

/** 获取单元诊断建议  [GET /open_api/v3.0/tools/promotion_diagnosis/suggestion/get/] */
export function tools_promotion_diagnosis_suggestion_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/promotion_diagnosis/suggestion/get/', 'GET', advertiserId, params, token);
}

/** 采纳单元诊断建议  [POST /open_api/v3.0/tools/promotion_diagnosis/suggestion/accept/] */
export function tools_promotion_diagnosis_suggestion_accept(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/promotion_diagnosis/suggestion/accept/', 'POST', advertiserId, params, token);
}

/** 获取作品场景  [POST /open_api/2/tools/rubeex/remark/] */
export function tools_rubeex_remark(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/rubeex/remark/', 'POST', advertiserId, params, token);
}

/** 获取作品版本信息  [GET /open_api/2/tools/rubeex/version/get/] */
export function tools_rubeex_version_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/rubeex/version/get/', 'GET', advertiserId, params, token);
}

/** 删除动态创意词包  [POST /open_api/2/tools/creative_word/delete/] */
export function tools_creative_word_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/creative_word/delete/', 'POST', advertiserId, params, token);
}

/** 获取穿山甲流量包  [GET /open_api/2/tools/union/flow_package/get/] */
export function tools_union_flow_package_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/union/flow_package/get/', 'GET', advertiserId, params, token);
}

/** 创建穿山甲流量包  [POST /open_api/2/tools/union/flow_package/create/] */
export function tools_union_flow_package_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/union/flow_package/create/', 'POST', advertiserId, params, token);
}

/** 修改穿山甲流量包  [POST /open_api/2/tools/union/flow_package/update/] */
export function tools_union_flow_package_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/union/flow_package/update/', 'POST', advertiserId, params, token);
}

/** 删除穿山甲流量包  [POST /open_api/2/tools/union/flow_package/delete/] */
export function tools_union_flow_package_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/union/flow_package/delete/', 'POST', advertiserId, params, token);
}

/** 查看rit数据  [POST /open_api/2/tools/union/flow_package/report/] */
export function tools_union_flow_package_report(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/union/flow_package/report/', 'POST', advertiserId, params, token);
}

/** 查看2.0rit数据  [POST /open_api/v3.0/tools/union/flow_package/promotion/report/] */
export function tools_union_flow_package_promotion_report(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/union/flow_package/promotion/report/', 'POST', advertiserId, params, token);
}

/** 引流下单转化信息获取  [POST /open_api/2/adv_convert/ole/convert/] */
export function adv_convert_ole_convert(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/adv_convert/ole/convert/', 'POST', advertiserId, params, token);
}

/** 定向包查询关联项目信息  [GET /open_api/v3.0/audience_package_bindinfo/get/] */
export function audience_package_bindinfo_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/audience_package_bindinfo/get/', 'GET', advertiserId, params, token);
}

/** 获取定向包  [GET /open_api/v3.0/audience_package/get/] */
export function audience_package_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/audience_package/get/', 'GET', advertiserId, params, token);
}

/** 创建定向包  [POST /open_api/2/audience_package/create/] */
export function audience_package_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/audience_package/create/', 'POST', advertiserId, params, token);
}

/** 更新定向包  [POST /open_api/2/audience_package/update/] */
export function audience_package_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/audience_package/update/', 'POST', advertiserId, params, token);
}

/** 删除定向包  [POST /open_api/2/audience_package/delete/] */
export function audience_package_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/audience_package/delete/', 'POST', advertiserId, params, token);
}

/** 开启素材起量  [POST /open_api/v3.0/tools/material_raise/create/] */
export function tools_material_raise_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/material_raise/create/', 'POST', advertiserId, params, token);
}

/** 获取素材起量方案列表  [GET /open_api/v3.0/tools/material_raise/get/] */
export function tools_material_raise_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/material_raise/get/', 'GET', advertiserId, params, token);
}

/** 获取起量中素材列表  [GET /open_api/v3.0/tools/material_raise/material_ids/get/] */
export function tools_material_raise_material_ids_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/material_raise/material_ids/get/', 'GET', advertiserId, params, token);
}

/** 获取素材起量记录列表  [GET /open_api/v3.0/tools/material_raise_records/get/] */
export function tools_material_raise_records_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/material_raise_records/get/', 'GET', advertiserId, params, token);
}

/** 获取素材起量状态  [GET /open_api/v3.0/tools/material_raise_status/get/] */
export function tools_material_raise_status_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/material_raise_status/get/', 'GET', advertiserId, params, token);
}

/** 关停素材起量任务  [POST /open_api/v3.0/tools/material_raise/stop/] */
export function tools_material_raise_stop(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/material_raise/stop/', 'POST', advertiserId, params, token);
}

/** 获取营销建议起量预算  [GET /open_api/v3.0/tools/suggest_budget/get/] */
export function tools_suggest_budget_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/suggest_budget/get/', 'GET', advertiserId, params, token);
}

/** 开启/更新一键起量  [POST /open_api/v3.0/tools/promotion_raise/set/] */
export function tools_promotion_raise_set(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/promotion_raise/set/', 'POST', advertiserId, params, token);
}

/** 获取一键起量方案列表  [GET /open_api/v3.0/tools/promotion_raise_status/get/] */
export function tools_promotion_raise_status_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/promotion_raise_status/get/', 'GET', advertiserId, params, token);
}

/** 获取营销起量状态  [GET /open_api/v3.0/tools/promotion_raise_status_current_ids/get/] */
export function tools_promotion_raise_status_current_ids_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/promotion_raise_status_current_ids/get/', 'GET', advertiserId, params, token);
}

/** 获取起量版本信息  [GET /open_api/v3.0/tools/promotion_raise_version/get/] */
export function tools_promotion_raise_version_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/promotion_raise_version/get/', 'GET', advertiserId, params, token);
}

/** 关停正在起量的营销  [POST /open_api/v3.0/tools/promotion_raise/stop/] */
export function tools_promotion_raise_stop(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/promotion_raise/stop/', 'POST', advertiserId, params, token);
}

/** 获取RTA策略数据  [POST /open_api/2/tools/rta/get_info/] */
export function tools_rta_get_info(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/rta/get_info/', 'POST', advertiserId, params, token);
}

/** 获取可用的RTA策略  [GET /open_api/2/tools/rta/get/] */
export function tools_rta_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/rta/get/', 'GET', advertiserId, params, token);
}

/** 批量启停账户下RTA策略  [POST /open_api/2/tools/rta/status_update/] */
export function tools_rta_status_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/rta/status_update/', 'POST', advertiserId, params, token);
}

/** 设置账户下RTA策略生效范围  [POST /open_api/2/tools/rta/set_scope/] */
export function tools_rta_set_scope(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/rta/set_scope/', 'POST', advertiserId, params, token);
}

/** 获取穿山甲渠道RTA联合实验数据  [GET /open_api/2/report/rta_exp/get/] */
export function report_rta_exp_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/report/rta_exp/get/', 'GET', advertiserId, params, token);
}

/** 获取穿山甲客户分流联合实验数据  [GET /open_api/2/report/rta_cus_exp/get/] */
export function report_rta_cus_exp_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/report/rta_cus_exp/get/', 'GET', advertiserId, params, token);
}

/** 获取站内媒体RTA联合实验数据（分时t+5）  [GET /open_api/v3.0/report/rta_exp_local_hourly/get/] */
export function report_rta_exp_local_hourly_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/report/rta_exp_local_hourly/get/', 'GET', advertiserId, params, token);
}

/** 获取站内媒体RTA联合实验数据（分天t+1）  [GET /open_api/v3.0/report/rta_exp_local_daily/get/] */
export function report_rta_exp_local_daily_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/report/rta_exp_local_daily/get/', 'GET', advertiserId, params, token);
}

/** 获取RTA策略绑定信息列表  [GET /open_api/v3.0/tools/rta/scope/get/] */
export function tools_rta_scope_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/tools/rta/scope/get/', 'GET', advertiserId, params, token);
}

/** 获取地域列表  [GET /open_api/2/tools/region/get/] */
export function tools_region_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/region/get/', 'GET', advertiserId, params, token);
}

/** 新建优选起量任务  [POST /open_api/2/tools/task_raise/create/] */
export function tools_task_raise_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/task_raise/create/', 'POST', advertiserId, params, token);
}

/** 查询优选起量任务  [GET /open_api/2/tools/task_raise/get/] */
export function tools_task_raise_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/task_raise/get/', 'GET', advertiserId, params, token);
}

/** 关闭优选起量任务  [POST /open_api/2/tools/task_raise/status/stop/] */
export function tools_task_raise_status_stop(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/task_raise/status/stop/', 'POST', advertiserId, params, token);
}

/** 查询优选起量状态  [GET /open_api/2/tools/task_raise/optimization_ids/get/] */
export function tools_task_raise_optimization_ids_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/task_raise/optimization_ids/get/', 'GET', advertiserId, params, token);
}

/** 查询优选起量任务数据  [GET /open_api/2/tools/task_raise/data/get/] */
export function tools_task_raise_data_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/2/tools/task_raise/data/get/', 'GET', advertiserId, params, token);
}

/** 创建原生锚点  [POST /open_api/v3.0/native_anchor/create/] */
export function native_anchor_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/native_anchor/create/', 'POST', advertiserId, params, token);
}

/** 更新原生锚点  [POST /open_api/v3.0/native_anchor/update/] */
export function native_anchor_update(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/native_anchor/update/', 'POST', advertiserId, params, token);
}

/** 删除原生锚点  [POST /open_api/v3.0/native_anchor/delete/] */
export function native_anchor_delete(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/native_anchor/delete/', 'POST', advertiserId, params, token);
}

/** 获取原生锚点列表  [GET /open_api/v3.0/native_anchor/get/] */
export function native_anchor_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/native_anchor/get/', 'GET', advertiserId, params, token);
}

/** 获取原生锚点详情  [GET /open_api/v3.0/native_anchor/get/detail/] */
export function native_anchor_get_detail(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/native_anchor/get/detail/', 'GET', advertiserId, params, token);
}

/** 批量获取锚点预览url  [GET /open_api/v3.0/native_anchor/qrcode_preview/get/] */
export function native_anchor_qrcode_preview_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/native_anchor/qrcode_preview/get/', 'GET', advertiserId, params, token);
}

/** 获取拒审素材修复建议  [GET /open_api/v3.0/reject_material/ai_repair/get/] */
export function reject_material_ai_repair_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/reject_material/ai_repair/get/', 'GET', advertiserId, params, token);
}

/** 创建采纳「拒审素材修复建议」任务  [POST /open_api/v3.0/reject_material/ai_repair_accept_task/create/] */
export function reject_material_ai_repair_accept_task_create(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/reject_material/ai_repair_accept_task/create/', 'POST', advertiserId, params, token);
}

/** 获取采纳素材修复建议任务结果  [GET /open_api/v3.0/reject_material/ai_repair_accept_task/list/] */
export function reject_material_ai_repair_accept_task_list(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/reject_material/ai_repair_accept_task/list/', 'GET', advertiserId, params, token);
}

/** 根据mid查询同主体账户下修复建议列表  [GET /open_api/v3.0/reject_material/ai_repair/cross_account/get/] */
export function reject_material_ai_repair_cross_account_get(advertiserId: string | number, params: Record<string, any> = {}, token: string) {
  return oeRequest('/open_api/v3.0/reject_material/ai_repair/cross_account/get/', 'GET', advertiserId, params, token);
}
